import { NetworkError, UnauthorizedError } from '@equinor/echo-base';
import { fetchWithTokenLogic } from './fetchWithTokenLogic';

describe('fetchWithTokenLogic: throw error tests', () => {
    const url = 'https://fakeTestUrl';
    const token = 'token';
    const fetchMock = window.fetch as jest.Mock;

    it('200 should return with ok response object', async () => {
        fetchMock.mockReturnValue(mockedResponse({ status: 200 }));

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
        fetchMock.mockReturnValue(mockedResponse({ status: 403 }));

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
        fetchMock.mockRejectedValue(new Error(innerErrorMessage));

        let error: NetworkError | undefined = undefined;
        try {
            await fetchWithTokenLogic(url, token);
        } catch (ex) {
            error = ex as NetworkError;
        }

        expect(error instanceof NetworkError).toBe(true);
        expect(error?.message).toBe('uncaught exception response');
        expect(error?.getUrl()).toBe(url);
        expect(error?.getInnerErrorProperties()['message']).toBe(innerErrorMessage);
    });

    it(`reject with a string instead of an error should throw error with 'uncaught exception response' message`, async () => {
        const innerErrorMessage = 'expected to fail';
        fetchMock.mockRejectedValue(new Error(innerErrorMessage));

        let error: NetworkError | undefined = undefined;
        try {
            await fetchWithTokenLogic(url, token);
        } catch (ex) {
            error = ex as NetworkError;
        }

        expect(error instanceof NetworkError).toBe(true);
        expect(error?.message).toBe('uncaught exception response');
        expect(error?.getUrl()).toBe(url);
        expect(error?.getInnerErrorProperties()['message']).toBe(innerErrorMessage);
    });
});

function mockedResponse(args: { status: number; json?: Record<string, unknown>; text?: string }) {
    const { status, json, text } = args;
    return Promise.resolve({
        json: () => (json ? Promise.resolve(json) : undefined),
        text: () => (text ? Promise.resolve(text) : json ? Promise.resolve(JSON.stringify(json)) : undefined),
        status,
        ok: status >= 200 && status < 300,
        headers: { get: (): string => (json ? 'application/json' : 'text/plain') }
    });
}
