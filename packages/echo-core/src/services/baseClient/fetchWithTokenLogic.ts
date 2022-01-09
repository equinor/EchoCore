import { getAllProperties, initializeNetworkError, NetworkError, toError } from '@equinor/echo-base';

/**
 * Fetch with specific accessToken.
 *
 * @return {*}  {Promise<Response>}
 * @memberof BaseClient
 */
export async function fetchWithTokenLogic(
    endpoint: string,
    token: string,
    headerOptions: Record<string, unknown> = { 'Content-Type': 'application/json' },
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
            const data =
                contentType && contentType.indexOf('application/json') !== -1
                    ? await response.json()
                    : await response.text();

            throw initializeNetworkError({
                message: 'failed response',
                httpStatusCode: statusCode,
                url: endpoint,
                exception: { details: data }
            });
        }
        return response;
    } catch (exception) {
        if (exception instanceof NetworkError) {
            throw exception;
        }

        throw initializeNetworkError({
            message: 'uncaught exception response',
            httpStatusCode: statusCode,
            url: endpoint,
            exception: getAllProperties(toError(exception))
        });
    }
}
