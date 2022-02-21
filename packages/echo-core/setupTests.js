const mGetRandomValues = jest.fn().mockReturnValueOnce(new Uint32Array(10));

Object.defineProperty(window, 'fetch', {
    value: jest.fn()
});

Object.defineProperty(window.console, 'error', {
    value: jest.fn()
});

Object.defineProperty(window.console, 'warn', {
    value: jest.fn()
});

Object.defineProperty(window, 'crypto', {
    value: { getRandomValues: mGetRandomValues }
});

jest.mock('../echo-base/src/errors/randomHelper', () => {
    return {
        randomId: jest.fn(() => 'mocked-static-id-9999')
    };
});
