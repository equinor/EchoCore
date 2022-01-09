const mGetRandomValues = jest.fn().mockReturnValueOnce(new Uint32Array(10));

Object.defineProperty(window, 'fetch', {
    value: jest.fn()
});

Object.defineProperty(window, 'crypto', {
    value: { getRandomValues: mGetRandomValues }
});

jest.mock('../echo-base/src/errors/randomHelper', () => {
    return {
        randomId: jest.fn(() => 'ignore')
    };
});
