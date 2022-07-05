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
            const data = await response.text();
            let jsonData: Record<string, unknown> | undefined = undefined;
            try {
                //checking response.contentType for json data is not always reliable, let's try to parse it to json instead
                jsonData = JSON.parse(data);
            } catch {
                //expected, it's handled just below
            }
            const details = jsonData ?? { details: data };

            throw initializeNetworkError({
                message: 'failed response',
                httpStatusCode: statusCode,
                url: endpoint,
                exception: details
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
