import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { env, isDevelopment } from '../../configuration/environment';
import ArgumentError from '../../errors/ArgumentError';
import { initializeError } from '../../errors/errorHandlers';
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

    async getAccessToken(): Promise<string | undefined> {
        if (!this.authProvider.userProperties.account) {
            throw new ArgumentError({ argumentName: 'authProvider.userProperties.account' });
        }
        return await this.authProvider.getAccessToken(this.getSilentRequest(this.authProvider.userProperties.account));
    }

    isAuthenticated(): boolean {
        return this.authProvider.isAuthenticated;
    }

    async fetch(
        url: string,
        headerOptions: Record<string, unknown> = {},
        method = 'GET',
        body?: unknown,
        signal?: AbortSignal
    ): Promise<Response> {
        if (!this.authProvider.userProperties.account)
            throw new ArgumentError({ argumentName: 'authProvider.userProperties.account' });
        return await this.authProvider
            .aquireTokenSilentOrRedirectToAuthenticate(
                this.getSilentRequest(this.authProvider.userProperties.account),
                this.authProvider.loginRequest
            )
            .then(async (authenticationResult) => {
                return authenticationResult
                    ? await this.fetchFromUrl(
                          url,
                          authenticationResult.accessToken,
                          headerOptions,
                          method,
                          body,
                          signal
                      )
                    : ({} as Response);
            });
    }

    async fetchFromUrl(
        endpoint: string,
        token: string,
        headerOptions: Record<string, unknown>,
        method = 'GET',
        body?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
        signal?: AbortSignal
    ): Promise<Response> {
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
        } catch (exception) {
            const errorInstance = initializeError(NetworkError, {
                httpStatusCode: statusCode,
                url: endpoint,
                exception
            });
            throw errorInstance;
        }
    }
}
