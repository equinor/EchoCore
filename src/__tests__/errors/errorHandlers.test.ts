import { handleClientError } from '../../errors/errorHandlers';
import NetworkError from '../../errors/NetworkError';

describe('handleClientError', () => {
    const url = 'http://localhost:3000';
    const exception = { errors: { NetworkException: 'enpoint is unreachable' } };

    it('should return NetworkError with NotFoundError message', () => {
        const result = handleClientError(exception, 404, url);
        expect(result instanceof NetworkError).toBe(true);
        expect(result.message).toEqual('NotFoundError');
    });

    it('should return NetworkError with BackendError message', () => {
        const result = handleClientError(exception, 400, url);
        expect(result instanceof NetworkError).toBe(true);
        expect(result.message).toEqual('BackendError');
    });

    it('should return NetworkError with BackendError message', () => {
        const result = handleClientError(exception, 500, url);
        expect(result instanceof NetworkError).toBe(true);
        expect(result.message).toEqual('BackendError');
    });

    it('should return NetworkError with ValidationError message', () => {
        const result = handleClientError({ ...exception, title: 'Validation' }, 400, url);
        expect(result instanceof NetworkError).toBe(true);
        expect(result.message).toEqual('ValidationError');
    });
});
