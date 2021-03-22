import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { env, isDevelopment } from '../../configuration/environment';
import { handleClientError } from '../../errors/errorHandlers';
import { NetworkError } from '../../errors/network';
import { AuthenticationProvider } from '../authentication/authProvider';

/**
 * Base Client class providing basic methods for performing a fetch with authentication
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

    fetch = async (
        url: string,
        headerOptions: Record<string, unknown> = {},
        method = 'GET',
        body?: unknown,
        signal?: AbortSignal
    ): Promise<Response> | never => {
        let response = {} as Response;
        if (!this.authProvider.userProperties.account) return response;

        await this.authProvider
            .aquireTokenSilentOrRedirectToAuthenticate(
                this.getSilentRequest(this.authProvider.userProperties.account),
                this.authProvider.loginRequest
            )
            .then(async (authenticationResult) => {
                if (authenticationResult) {
                    response = await this.fetchFromUrl(
                        url,
                        authenticationResult.accessToken,
                        headerOptions,
                        method,
                        body,
                        signal
                    );
                }
            });
        return response;
    };

    fetchFromUrl = async (
        endpoint: string,
        token: string,
        headerOptions: Record<string, unknown>,
        method = 'GET',
        body?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
        signal?: AbortSignal
    ): Promise<Response> | never => {
        let statusCode = 0;
        try {
            if (isDevelopment() || env().REACT_APP_LOGGER_ACTIVE) console.log('Fetch:', endpoint);
            const headers = {
                Authorization: 'Bearer ' + token,
                ...headerOptions,
                ...(body && { 'Content-Type': 'application/json' })
            };

            const response: Response = await fetch(endpoint, {
                method,
                headers,
                body,
                signal
            });

            if (response.status) statusCode = response.status;
            if (isDevelopment() || env().REACT_APP_LOGGER_ACTIVE) {
                console.log('Done:', statusCode, endpoint);
            }

            if (response && !response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    throw await response.json();
                } else {
                    throw await response.text();
                }
            }
            return response;
        } catch (ex) {
            const errorInstance: NetworkError = handleClientError(ex, statusCode, endpoint);
            throw errorInstance;
        }
    };
}
