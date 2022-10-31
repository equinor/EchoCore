import {
    AccountInfo,
    AuthenticationResult,
    Configuration,
    InteractionRequiredAuthError,
    PublicClientApplication,
    RedirectRequest,
    SilentRequest
} from '@azure/msal-browser';
import { BaseError } from '@equinor/echo-base';
import { UserProperties } from '../../types/userProperties';
import { defaultLoginRequest, loginSilentlyRequest, logoutRequest } from './authProviderConfig';

/**
 * Echo Core Authentication provider class for creating providers that provide logout-, login- and getAccessToken-methods.
 * Can be extended if needed
 * Based on the @azure/msal-browser package
 * @param configuration @azure/msal-browser Configuration object used for authentication
 * @param loginRequest Silent request used for login, can be specified if default is not not enough:
 * @var defaultLoginRequest = {
        account: user,
        forceRefresh: false,
        scopes: ['openid', 'profile', 'User.Read', 'offline_access']
    };
 */
export class AuthenticationProvider {
    /**
     * Deprecated userProperties property. Instead use getUserProperties() or getUserAccount()
     * // @deprecated
     */
    userProperties?: UserProperties;

    publicClient: PublicClientApplication;
    loginRequest: RedirectRequest;
    isAuthenticated: boolean;

    throwAnError: boolean;

    constructor(configuration: Configuration, loginRequest = defaultLoginRequest) {
        this.throwAnError = false;
        this.publicClient = new PublicClientApplication(configuration);
        this.loginRequest = loginRequest;
        this.isAuthenticated = false;
    }

    async getUserProperties(): Promise<UserProperties> {
        if (this.userProperties?.account) {
            return this.userProperties;
        }

        await this.ssoSilentOrRedirectToAuthenticate();
        if (!this.userProperties?.account) {
            throw new BaseError({
                name: 'AuthError',
                message: 'account is null, failed to ssoSilentOrRedirectToAuthenticate'
            });
        }
        return this.userProperties;
    }

    async getUserAccount(): Promise<AccountInfo> {
        const userProperties = await this.getUserProperties();
        return userProperties.account;
    }

    /**
     * Authentication provider method for handling login
     * Based on the @azure/msal-browser package
     * @param logRequest method for providing log for login authentication outcomes
     */
    handleLogin = async (logRequest?: (...args: unknown[]) => void): Promise<void> => {
        await this.publicClient.handleRedirectPromise().then(async (response) => {
            this.isAuthenticated = false;
            if (response) {
                logRequest && logRequest('Got response');
                if (!response.account) {
                    throw new BaseError({
                        name: 'AuthError',
                        message: 'account is null, failed to handleRedirectPromise'
                    });
                }

                this.userProperties = { account: response.account };
                this.isAuthenticated = true;
            } else if (this.publicClient.getAllAccounts().length === 0) {
                logRequest && logRequest('No response and no users');
                this.login();
            } else {
                logRequest &&
                    logRequest('No response but I have users, attempting sso-silent or acquire token with redirect');
                await this.ssoSilentOrRedirectToAuthenticate();
            }
        });
    };

    /**
     * Authentication provider method that tries to acquire token silently
     * If acquiring token silently is successful, update account and set is authenticated to true
     * If acquiring token silently fails, check if it is because interaction is required and redirect sign in if it is
     * Based on the @azure/msal-browser package
     */
    ssoSilentOrRedirectToAuthenticate = async (): Promise<void> => {
        await this.publicClient
            .acquireTokenSilent(loginSilentlyRequest(this.publicClient.getAllAccounts()[0]))
            .then((response) => {
                if (!response.account || this.throwAnError) {
                    this.throwAnError = false;
                    throw new BaseError({
                        name: 'AuthError',
                        message:
                            'account is null, failed to acquireTokenSilent loginSilentlyRequest getAllAccounts()[0]'
                    });
                }

                this.userProperties = { account: response.account };
                this.isAuthenticated = true;
            })
            .catch((er) => {
                console.log('Silent token acquisition failed.');
                if (er instanceof InteractionRequiredAuthError) {
                    console.log('Acquiring token using redirect');
                    this.publicClient.acquireTokenRedirect(this.loginRequest).then();
                } else {
                    console.error(er);

                    throw new BaseError({
                        name: 'AuthError',
                        message: 'Silent token acquisition failed',
                        innerError: er
                    });
                }
            });
    };

    /**
     * Authentication provider method that tries to acquire token silently
     * If acquiring token silently is successful, update account and set is authenticated to true
     * If acquiring token silently fails, check if it is because interaction is required and redirect sign in if it is
     * Based on the @azure/msal-browser package
     * @returns authenticationResult stating if authentication was successful or not
     */
    aquireTokenSilentOrRedirectToAuthenticate = async (
        silentRequest: SilentRequest,
        redirectRequest: RedirectRequest
    ): Promise<AuthenticationResult | null> => {
        let authenticationResult: AuthenticationResult | undefined;
        await this.publicClient
            .acquireTokenSilent(silentRequest)
            .then((response) => {
                authenticationResult = response;
            })
            .catch((er) => {
                if (er instanceof InteractionRequiredAuthError) {
                    this.publicClient.acquireTokenRedirect(redirectRequest).catch(console.error).then();
                } else {
                    console.error(er);
                    throw er;
                }
            });
        return authenticationResult ? authenticationResult : null;
    };

    /**
     * Authentication provider method for forcing redirect login used when no user is already signed in
     * Based on the @azure/msal-browser package
     */
    login = async (): Promise<void> => {
        await this.publicClient.loginRedirect(this.loginRequest);
    };

    /**
     * Authentication provider method for signing out a user
     * Based on the @azure/msal-browser package
     */
    logout = (): void => {
        if (this.userProperties?.account) {
            this.publicClient.logout(logoutRequest(this.userProperties.account));
        }
    };

    /**
     * Authentication provider method for getting the users authentication token
     * Based on the @azure/msal-browser package
     * @returns valid access token if request was successful, undefined if not.
     */
    getAccessToken = async (silentRequest: SilentRequest): Promise<string | undefined> => {
        const adResult = await this.aquireTokenSilentOrRedirectToAuthenticate(silentRequest, this.loginRequest);
        return adResult ? adResult.accessToken : undefined;
    };
}

function tokenExpiresInSeconds(userProperties: UserProperties) {
    const expiration = userProperties?.account?.idTokenClaims?.exp ?? 0;
    const now = Math.floor(Date.now() / 1000);
    const expiresIn = expiration - now;
    console.log('Token expires in', expiresIn);

    return expiresIn;
}
