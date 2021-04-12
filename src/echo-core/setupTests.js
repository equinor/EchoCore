const mGetRandomValues = jest.fn().mockReturnValueOnce(new Uint32Array(10));
Object.defineProperty(window, 'crypto', {
    value: { getRandomValues: mGetRandomValues }
});
