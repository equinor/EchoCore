import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { env, isDevelopment } from '../../configuration/environment';
import { AuthenticationProvider } from '../authentication/authProvider';

/**
 * Base Client class providing basic methods for performing a fetch with authentication
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

    fetch = async (
        url: string,
        headerOptions: unknown = {},
        method = 'GET',
        body?: unknown,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleClientError?: (ex: unknown, statusCode: number, endpoint: string) => any,
        signal?: AbortSignal
    ): Promise<Response> => {
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
                        handleClientError,
                        signal
                    );
                }
            });
        return response;
    };

    fetchFromUrl = async (
        endpoint: string,
        token: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        headerOptions: any = {},
        method = 'GET',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body?: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleClientError?: (ex: unknown, statusCode: number, endpoint: string) => any,
        signal?: AbortSignal
    ): Promise<Response> => {
        let statusCode = 0;

        try {
            if (isDevelopment() || env().REACT_APP_LOGGER_ACTIVE) console.log('Fetch:', endpoint);

            const headers = body
                ? {
                      Authorization: 'Bearer ' + token,
                      ...headerOptions
                  }
                : {
                      Authorization: 'Bearer ' + token,
                      'Content-Type': 'application/json',
                      ...headerOptions
                  };

            const response: Response = await fetch(endpoint, {
                method,
                headers: headers,
                body: body,
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
            if (handleClientError) {
                const handledError = handleClientError(ex, statusCode, endpoint);
                throw handledError;
            } else {
                throw ex;
            }
        }
    };
}
