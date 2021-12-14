import { NetworkError, UnauthorizedError } from '@equinor/echo-base';
import { fetchWithTokenLogic } from './fetchWithTokenLogic';

describe('fetchWithTokenLogic', () => {
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
        expect(error?.getUrl()).toBe(url);
    });

    it('401 should throw unauthorized exception', async () => {
        global.fetch = jest.fn(() => mockedResponse({ status: 401 })) as jest.Mock;

        await expect(async () => {
            await fetchWithTokenLogic(url, token);
        }).rejects.toThrowError(
            new UnauthorizedError({
                message: `UnauthorizedError 401 https://fakeTestUrl`,
                url: 'moo',
                httpStatusCode: 401
            })
        );
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
