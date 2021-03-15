import NetworkError from '../../errors/NetworkError';

describe('NetworkError', () => {
    const message = 'Network Error Testing';
    const httpStatusCode = 500;
    const url = 'http://localhost:3000';
    const exception = { NetworkException: 'enpoint is unreachable' };

    const nwError = new NetworkError({ message, httpStatusCode, url, exception });

    it('should not be logged', () => {
        expect(nwError.hasBeenLogged).toBeFalsy();
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
        const ne = new NetworkError({ message: '', httpStatusCode, url, exception });
        expect(ne.message).toEqual(`${ne.name} ${httpStatusCode} ${url}`);
    });

    it('check BaseError name when message is not empty', () => {
        const ne = new NetworkError({ message, httpStatusCode, url, exception });
        expect(ne.message).not.toEqual(ne.name);
    });
});
