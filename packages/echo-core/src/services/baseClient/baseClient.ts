import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { toError } from '@equinor/echo-base';
import { AuthenticationProvider } from '../authentication/authProvider';
import { AuthenticationError } from './authenticationError';
import { fetchWithTokenLogic } from './fetchWithTokenLogic';

/**
 * Base Client class providing methods for performing a fetch with authentication and acquiring AccessToken.
 * @param authProvider used for fetching token to be used in fetch
 * @getSilentRequest returns the silent request used to perform the action of fetching the authentication provider token
 */
export class BaseClient {
    private authProvider: AuthenticationProvider;
    private getSilentRequest: (account: AccountInfo) => SilentRequest;

    constructor(authProvider: AuthenticationProvider, getSilentRequest: (account: AccountInfo) => SilentRequest) {
        this.authProvider = authProvider;
        this.getSilentRequest = getSilentRequest;
    }
    /**
     * Function for silently acquiring AccessToken.
     *
     * @return {*}  {(Promise<string | undefined>)}
     * @memberof BaseClient
     */
    async getAccessToken(): Promise<string> {
        const userAccount = await this.authProvider.getUserAccount(); // used to (if account null): throw new ArgumentError({ argumentName: 'authProvider.userProperties.account' });
        try {
            const authenticationResult = await this.authProvider.aquireTokenSilentOrRedirectToAuthenticate(
                this.getSilentRequest(userAccount),
                this.authProvider.loginRequest
            );
            return authenticationResult ? authenticationResult.accessToken : '';
        } catch (exception) {
            throw new AuthenticationError({ message: 'failed to authenticate', innerError: toError(exception) });
        }
    }

    /**
     * Returns true if user is authenticated
     *
     * @return {*}  {boolean}
     * @memberof BaseClient
     */
    isAuthenticated(): boolean {
        return this.authProvider.isAuthenticated;
    }

    /**
     * Fetch with accessToken from authProvider.
     *
     * @return {*}  {Promise<Response>}
     * @memberof BaseClient
     */
    async fetch(
        url: string,
        headerOptions: Record<string, unknown> = {},
        method = 'GET',
        body?: BodyInit,
        signal?: AbortSignal
    ): Promise<Response> {
        const accessToken = await this.getAccessToken(); // used to (if account null): throw new ArgumentError({ argumentName: 'authProvider.userProperties.account' });
        return await this.fetchWithToken(url, accessToken, headerOptions, method, body, signal);
    }

    /**
     * Fetch with specific accessToken.
     *
     * @return {*}  {Promise<Response>}
     * @memberof BaseClient
     */
    async fetchWithToken(
        endpoint: string,
        token: string,
        headerOptions: Record<string, unknown> = { 'Content-Type': 'application/json' },
        method = 'GET',
        body?: BodyInit,
        signal?: AbortSignal
    ): Promise<Response> {
        return await fetchWithTokenLogic(endpoint, token, headerOptions, method, body, signal);
    }

    /**
     * use fetchWithToken instead
     * @deprecated
     */
    async fetchFromUrl(
        url: string,
        accessToken: string,
        headerOptions: Record<string, unknown>,
        method = 'GET',
        body?: BodyInit,
        signal?: AbortSignal
    ): Promise<Response> {
        return await this.fetchWithToken(url, accessToken, headerOptions, method, body, signal);
    }
}
