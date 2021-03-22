import { handleClientError, initializeError } from '../../errors/errorHandlers';
import { BackendError, ForbiddenError, NetworkError, NotFoundError, ValidationError } from '../../errors/network';

describe('handleClientError', () => {
    const url = 'http://localhost:3000';
    const exception = {
        errors: { NetworkException: 'endpoint is unreachable' },
        dummyProperty: true
    };

    it('should return NetworkError with NotFoundError message', () => {
        const result = handleClientError(exception, 404, url);
        expect(result instanceof NotFoundError).toBe(true);
        expect(result.message).toEqual('NotFoundError 404 http://localhost:3000');
    });

    it('should return NetworkError with BackendError message', () => {
        const result = handleClientError(exception, 400, url);
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError 400 http://localhost:3000');
        expect(result.getProperties().dummyProperty).toBe(true);
    });

    it('should return NetworkError with BackendError message', () => {
        const result = handleClientError(exception, 500, url);
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError 500 http://localhost:3000');
        expect(result.getProperties().dummyProperty).toBe(true);
    });

    it('should return NetworkError with ValidationError message', () => {
        exception.dummyProperty = false;
        const result = handleClientError({ ...exception, title: 'Validation' }, 400, url);
        expect(result instanceof ValidationError).toBe(true);
        expect(result.message).toEqual('ValidationError 400 http://localhost:3000');
        expect(result.getProperties().dummyProperty).not.toBe(true);
    });

    it('should return ForbiddenError with a specific message', () => {
        exception.dummyProperty = false;
        const result = initializeError(NetworkError, {
            url,
            exception,
            message: 'SpecificErrorMessage',
            httpStatusCode: 403
        });
        expect(result instanceof ForbiddenError).toBe(true);
        expect(result.message).toEqual('SpecificErrorMessage');
    });
});
