import { initializeError } from '@equinor/echo-base';
import { fetchWithTokenLogic } from './fetchWithTokenLogic';

jest.mock('@equinor/echo-base', () => {
    const originalModule = jest.requireActual('@equinor/echo-base');

    return {
        ...originalModule,
        initializeError: jest.fn(),
        toError: jest.fn(),
        getAllProperties: jest.fn()
    };
});

(initializeError as jest.Mock).mockImplementation(() => customError);

describe('fetchWithTokenLogic: throw error tests', () => {
    const url = 'https://fakeTestUrl';
    const token = 'token';
    const fetchMock = window.fetch as jest.Mock;

    it('should return with the given response as is - when the call was successful', async () => {
        const mockResponse = { status: 200, ok: true };
        fetchMock.mockResolvedValue(mockResponse);

        const response = await fetchWithTokenLogic(url, token);

        expect(fetchMock).toHaveBeenCalledWith('https://fakeTestUrl', {
            body: undefined,
            headers: { Authorization: 'Bearer token', 'Content-Type': 'application/json' },
            method: 'GET',
            signal: undefined
        });
        expect(response).toBe(mockResponse);
    });

    it('should throw error in case of failed response', async () => {
        const customError = new Error('Custom test error');
        let actualThrownError;
        fetchMock.mockResolvedValue({ status: 401 });

        try {
            await fetchWithTokenLogic(url, token);
        } catch (ex) {
            actualThrownError = ex;
        }

        expect(actualThrownError).toBe(customError);
        // expect(initializeError).toHaveBeenCalledWith(NetworkError, {
        //     exception: undefined,
        //     httpStatusCode: 401,
        //     message: 'failed response',
        //     url: 'https://fakeTestUrl'
        // });
    });

    // //Unit test for demonstration of expect().toThrowError, which only checks if the message is correct
    // it('403 rejects should throw forbidden exception', async () => {
    //     // global.fetch = jest.fn(() => mockedResponse({ status: 401 })) as jest.Mock;
    //     fetchMock.mockResolvedValue({ status: 401 });

    //     const errorWhereOnlyMessageWillBeVerified = new UnauthorizedError({
    //         message: 'uncaught exception response',
    //         url,
    //         httpStatusCode: 403
    //     });

    //     await expect(async () => {
    //         await fetchWithTokenLogic(url, token);
    //     }).rejects.toThrowError(errorWhereOnlyMessageWillBeVerified);
    // });

    // it(`reject with an Error should throw networkError with 'uncaught exception response' message`, async () => {
    //     const innerErrorMessage = 'TypeError - test';
    //     // global.fetch = jest.fn(() => Promise.reject(new Error(innerErrorMessage))) as jest.Mock;
    //     fetchMock.mockRejectedValue(new Error(innerErrorMessage));

    //     let error: NetworkError | undefined = undefined;
    //     try {
    //         await fetchWithTokenLogic(url, token);
    //     } catch (ex) {
    //         error = ex as NetworkError;
    //     }

    //     expect(error instanceof NetworkError).toBe(true);
    //     expect(error?.message).toBe('uncaught exception response');
    //     expect(error?.getUrl()).toBe(url);
    //     expect(error?.getProperties()['message']).toBe(innerErrorMessage);
    // });

    // it(`reject with a string instead of an error should throw error with 'uncaught exception response' message`, async () => {
    //     const innerErrorMessage = 'expected to fail';
    //     // global.fetch = jest.fn(() => Promise.reject(innerErrorMessage)) as jest.Mock;
    //     fetchMock.mockRejectedValue(new Error(innerErrorMessage));

    //     let error: NetworkError | undefined = undefined;
    //     try {
    //         await fetchWithTokenLogic(url, token);
    //     } catch (ex) {
    //         error = ex as NetworkError;
    //     }

    //     expect(error instanceof NetworkError).toBe(true);
    //     expect(error?.message).toBe('uncaught exception response');
    //     expect(error?.getUrl()).toBe(url);
    //     expect(error?.getProperties()['message']).toBe(innerErrorMessage);
    // });
});
