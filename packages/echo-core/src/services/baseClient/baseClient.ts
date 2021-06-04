import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { ArgumentError, BaseError, initializeError, NetworkError } from '@equinor/echo-base';
import { AuthenticationProvider } from '../authentication/authProvider';

export class AuthenticationError extends BaseError {}

/**
 * Base Client class providing methods for performing a fetch with authentication and acquiring AccessToken.
 * @param authProvider used for fetching token to be used in fetch
 * @getSilentRequest returns the silent request used to perform the action of fetching the authentication provider token
 */
export default class BaseClient {
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
        if (!this.authProvider.userProperties.account)
            throw new ArgumentError({ argumentName: 'authProvider.userProperties.account' });

        try {
            const authenticationResult = await this.authProvider.aquireTokenSilentOrRedirectToAuthenticate(
                this.getSilentRequest(this.authProvider.userProperties.account),
                this.authProvider.loginRequest
            );
            return authenticationResult ? authenticationResult.accessToken : '';
        } catch (exception) {
            throw new AuthenticationError({ message: 'failed to authenticate', exception });
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
        if (!this.authProvider.userProperties.account)
            throw new ArgumentError({ argumentName: 'authProvider.userProperties.account' });
        const accessToken = await this.getAccessToken();
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
        headerOptions: Record<string, unknown> = {},
        method = 'GET',
        body?: BodyInit,
        signal?: AbortSignal
    ): Promise<Response> {
        let statusCode = 0;
        try {
            const headers = {
                Authorization: 'Bearer ' + token,
                ...headerOptions
            };

            const response: Response = await fetch(endpoint, {
                method,
                headers,
                body,
                signal
            });

            if (response.status) statusCode = response.status;

            if (response && !response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    throw await response.json();
                } else {
                    throw await response.text();
                }
            }
            return response;
        } catch (exception) {
            const errorInstance = initializeError(NetworkError, {
                httpStatusCode: statusCode,
                url: endpoint,
                exception
            });
            throw errorInstance;
        }
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
