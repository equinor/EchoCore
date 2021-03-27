import { initializeError } from '../../echo-base/errors/errorHandlers';
import { BackendError, ForbiddenError, NotFoundError, ValidationError } from '../../echo-base/errors/network';
import NetworkError, { NetworkErrorArgs } from '../../echo-base/errors/network/NetworkError';

describe('handleClientError', () => {
    const args = {
        exception: {
            errors: { NetworkException: 'endpoint is unreachable' },
            dummyProperty: true
        },
        url: 'http://localhost:3000',
        httpStatusCode: 500
    } as NetworkErrorArgs;

    it('should return NetworkError with NotFoundError message', () => {
        const result = initializeError(NetworkError, { ...args, httpStatusCode: 404 });
        expect(result instanceof NotFoundError).toBe(true);
        expect(result.message).toEqual('NotFoundError 404 http://localhost:3000');
    });

    it('should return NetworkError with BackendError message', () => {
        const result = initializeError(NetworkError, { ...args, httpStatusCode: 400 });
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError 400 http://localhost:3000');
        expect(result.getProperties().dummyProperty).toBe(true);
    });

    it('should return NetworkError with BackendError message', () => {
        const result = initializeError(NetworkError, args);
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError 500 http://localhost:3000');
        expect(result.getProperties().dummyProperty).toBe(true);
    });

    it('should return NetworkError with ValidationError message', () => {
        args.exception.dummyProperty = false;
        args.exception.title = 'Validation';
        const result = initializeError(NetworkError, { ...args, httpStatusCode: 400 });
        expect(result instanceof ValidationError).toBe(true);
        expect(result.message).toEqual('ValidationError 400 http://localhost:3000');
        expect(result.getProperties().dummyProperty).not.toBe(true);
    });

    it('should return ForbiddenError with a specific message', () => {
        const result = initializeError(NetworkError, {
            ...args,
            message: 'SpecificErrorMessage',
            httpStatusCode: 403
        });
        expect(result instanceof ForbiddenError).toBe(true);
        expect(result.message).toEqual('SpecificErrorMessage');
    });
});
