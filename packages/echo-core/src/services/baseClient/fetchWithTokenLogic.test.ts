import { NetworkError, UnauthorizedError } from '@equinor/echo-base';
import { fetchWithTokenLogic } from './fetchWithTokenLogic';

describe('fetchWithTokenLogic: throw error tests', () => {
    const url = 'https://fakeTestUrl';
    const token = 'token';
    const fetchMock = jest.spyOn(window, 'fetch'); // we just put a spyOn it once - we don't define any mocked implementation yet - that is handled by the local test
    it('200 should return with ok response object', async () => {
        fetchMock.mockReturnValue(mockedResponse({ status: 200 })); // handling the actual mock response here + don't need to re-mock (and overwrite) fetch

        const response = await fetchWithTokenLogic(url, token);

        expect(response.status).toEqual(200);
        expect(response.ok).toBe(true);
    });

    it('201 should return with ok response object', async () => {
        fetchMock.mockReturnValue(mockedResponse({ status: 201 }));

        const response = await fetchWithTokenLogic(url, token);

        expect(response.status).toEqual(201);
        expect(response.ok).toBe(true);
    });

    it('401 should throw unauthorized exception', async () => {
        fetchMock.mockReturnValue(mockedResponse({ status: 401 }));

        let error: NetworkError | undefined = undefined;
        try {
            await fetchWithTokenLogic(url, token);
        } catch (ex) {
            error = ex as NetworkError;
        }

        expect(error instanceof UnauthorizedError).toBe(true);
        expect(error?.message).toBe('failed response');
        expect(error?.getUrl()).toBe(url);
    });

    //Unit test for demonstration of expect().toThrowError, which only checks if the message is correct
    it('403 rejects should throw forbidden exception', async () => {
        fetchMock.mockReturnValue(mockedResponse({ status: 401 }));

        const errorWhereOnlyMessageWillBeVerified = new UnauthorizedError({
            message: 'failed response',
            url,
            httpStatusCode: 403
        });

        await expect(async () => {
            await fetchWithTokenLogic(url, token);
        }).rejects.toThrowError(errorWhereOnlyMessageWillBeVerified);
    });

    it(`reject with an Error should throw networkError with 'uncaught exception response' message`, async () => {
        const innerErrorMessage = 'TypeError - test';
        fetchMock.mockReturnValue(Promise.reject(new Error(innerErrorMessage)));

        let error: NetworkError | undefined = undefined;
        try {
            await fetchWithTokenLogic(url, token);
        } catch (ex) {
            error = ex as NetworkError;
        }

        expect(error instanceof NetworkError).toBe(true);
        expect(error?.message).toBe('uncaught exception response');
        expect(error?.getUrl()).toBe(url);
        expect(error?.getProperties()['message']).toBe(innerErrorMessage);
    });

    it(`reject with a string instead of an error should throw error with 'uncaught exception response' message`, async () => {
        const innerErrorMessage = 'expected to fail';
        fetchMock.mockReturnValue(Promise.reject(innerErrorMessage));

        let error: NetworkError | undefined = undefined;
        try {
            await fetchWithTokenLogic(url, token);
        } catch (ex) {
            error = ex as NetworkError;
        }

        expect(error instanceof NetworkError).toBe(true);
        expect(error?.message).toBe('uncaught exception response');
        expect(error?.getUrl()).toBe(url);
        expect(error?.getProperties()['message']).toBe(innerErrorMessage);
    });
});

async function mockedResponse(args: {
    status: number;
    json?: Record<string, unknown>;
    text?: string;
}): Promise<Response> {
    const { status, json, text } = args;
    return Promise.resolve({
        json: () => (json ? Promise.resolve(json) : undefined),
        text: () => (text ? Promise.resolve(text) : json ? Promise.resolve(JSON.stringify(json)) : undefined),
        status,
        ok: status >= 200 && status < 300,
        headers: { get: (): string => (json ? 'application/json' : 'text/plain') }
    } as unknown as Response);
}
