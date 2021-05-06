import { ForbiddenError, NetworkError, NetworkErrorArgs } from '../../errors/NetworkError';

describe('NetworkError', () => {
    const message = 'Network Error Testing';
    const httpStatusCode = 500;
    const url = 'http://localhost:3000';
    const exception = { NetworkException: 'endpoint is unreachable' };

    const nwError = new NetworkError({ message, httpStatusCode, url, exception });

    it('should not be logged', () => {
        expect(nwError.hasBeenLogged).toBeFalsy();
    });

    it('should be correct instanceOf', () => {
        const forbiddenError = new ForbiddenError({} as NetworkErrorArgs);
        expect(forbiddenError instanceof ForbiddenError).toBeTruthy();
    });

    it('check properties', () => {
        const properties = {
            httpStatusCode,
            url,
            ...exception
        };

        expect(nwError.getProperties()).toEqual(properties);
    });

    it('check properties getUrl method', () => {
        expect(nwError.getUrl()).toEqual(url);
    });

    it('check BaseError name when message is empty', () => {
        const ne = new NetworkError({ httpStatusCode, url, exception });
        expect(ne.message).toEqual(`${ne.name} ${httpStatusCode} ${url}`);
    });

    it('check BaseError name when message is not empty', () => {
        const ne = new NetworkError({ message, httpStatusCode, url, exception });
        expect(ne.message).not.toEqual(ne.name);
    });
});
