import { NetworkError, UnauthorizedError } from '@equinor/echo-base';
import { fetchWithTokenLogic } from './fetchWithTokenLogic';

describe('fetchWithTokenLogic: throw error tests', () => {
    const url = 'https://fakeTestUrl';
    const token = 'token';
    it('200 should return with ok response object', async () => {
        global.fetch = jest.fn(() => mockedResponse({ status: 200 })) as jest.Mock;

        const response = await fetchWithTokenLogic(url, token);

        expect(response.status).toEqual(200);
        expect(response.ok).toBe(true);
    });

    it('201 should return with ok response object', async () => {
        global.fetch = jest.fn(() => mockedResponse({ status: 201 })) as jest.Mock;

        const response = await fetchWithTokenLogic(url, token);

        expect(response.status).toEqual(201);
        expect(response.ok).toBe(true);
    });

    it('401 should throw unauthorized exception', async () => {
        global.fetch = jest.fn(() => mockedResponse({ status: 401 })) as jest.Mock;

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
        global.fetch = jest.fn(() => mockedResponse({ status: 401 })) as jest.Mock;

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
        global.fetch = jest.fn(() => Promise.reject(new Error(innerErrorMessage))) as jest.Mock;

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
        global.fetch = jest.fn(() => Promise.reject(innerErrorMessage)) as jest.Mock;

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
