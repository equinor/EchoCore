import { handleClientError } from '../../errors/errorHandlers';
import { BackendError, NotFoundError, ValidationError } from '../../errors/network';

describe('handleClientError', () => {
    const url = 'http://localhost:3000';
    const exception = {
        errors: { NetworkException: 'enpoint is unreachable' },
        dummyProperty: true
    };

    it('should return NetworkError with NotFoundError message', () => {
        const result = handleClientError(exception, 404, url);
        expect(result instanceof NotFoundError).toBe(true);
        expect(result.message).toEqual('NotFoundError');
    });

    it('should return NetworkError with BackendError message', () => {
        const result = handleClientError(exception, 400, url);
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError');
        expect(result.getProperties().dummyProperty).toBe(true);
    });

    it('should return NetworkError with BackendError message', () => {
        const result = handleClientError(exception, 500, url);
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError');
        expect(result.getProperties().dummyProperty).toBe(true);
    });

    it('should return NetworkError with ValidationError message', () => {
        exception.dummyProperty = false;
        const result = handleClientError({ ...exception, title: 'Validation' }, 400, url);
        expect(result instanceof ValidationError).toBe(true);
        expect(result.message).toEqual('ValidationError');
        expect(result.getProperties().dummyProperty).not.toBe(true);
    });
});
