import { initializeNetworkError } from '../../errors/errorHandlers';
import {
    BackendError,
    BadRequestError,
    ForbiddenError,
    NetworkError,
    NetworkErrorArgs,
    NotFoundError,
    UnauthorizedError,
    ValidationError
} from '../../errors/NetworkError';

describe('NetworkError, derived types and initializeNetworkError', () => {
    function withException(): NetworkErrorArgs {
        const result: NetworkErrorArgs = {
            exception: {
                errors: { NetworkException: 'endpoint is unreachable' },
                dummyProperty: true
            },
            url: 'http://localhost:3000',
            httpStatusCode: 500
        } as NetworkErrorArgs;
        return result;
    }

    function withoutException(): NetworkErrorArgs {
        return { ...withException(), exception: undefined };
    }

    it('400 with exception validation properties should return ValidationError', () => {
        const argWithException = withException();
        argWithException.exception.dummyProperty = false;
        argWithException.exception.title = 'Validation';
        const result = initializeNetworkError({ ...argWithException, httpStatusCode: 400 });
        expect(result instanceof ValidationError).toBe(true);
        expect(result.message).toEqual('ValidationError 400 http://localhost:3000');
        expect(result.findPropertyByName('dummyProperty')).not.toBe(true);
    });

    it('400 with exception should return BackendError', () => {
        const result = initializeNetworkError({ ...withException(), httpStatusCode: 400 });
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError 400 http://localhost:3000');
        const actualDummyProperty = result.findPropertyByName('dummyProperty');
        expect(actualDummyProperty).toBe(true);
    });

    it('400 without exception should return BadRequest', () => {
        const result = initializeNetworkError({ ...withoutException(), httpStatusCode: 400 });
        expect(result instanceof BadRequestError).toBe(true);
        expect(result.message).toEqual('BadRequestError 400 http://localhost:3000');
        const actualDummyProperty = result.getProperties()['dummyProperty'];
        expect(actualDummyProperty).toBe(undefined);
    });

    it('401 with exception should return UnauthorizedError with a specific message', () => {
        const result = initializeNetworkError({
            ...withException(),
            message: 'SpecificErrorMessage',
            httpStatusCode: 401
        });
        expect(result instanceof UnauthorizedError).toBe(true);
        expect(result.message).toEqual('SpecificErrorMessage');
    });
    it('401 without exception should return UnauthorizedError with a specific message', () => {
        const result = initializeNetworkError({
            ...withoutException(),
            message: 'SpecificErrorMessage',
            httpStatusCode: 401
        });
        expect(result instanceof UnauthorizedError).toBe(true);
        expect(result.message).toEqual('SpecificErrorMessage');
    });

    it('403 with exception should return ForbiddenError with a specific message', () => {
        const result = initializeNetworkError({
            ...withException(),
            message: 'SpecificErrorMessage',
            httpStatusCode: 403
        });
        expect(result instanceof ForbiddenError).toBe(true);
        expect(result.message).toEqual('SpecificErrorMessage');
    });

    it('403 without exception should return ForbiddenError with a specific message', () => {
        const noExceptionArgs: NetworkErrorArgs = {
            message: 'a message',
            httpStatusCode: 403,
            url: 'https://echo-dummy.com',
            exception: null
        };
        const result = initializeNetworkError(noExceptionArgs);
        expect(result instanceof ForbiddenError).toBe(true);
        expect(result.message).toEqual(noExceptionArgs.message);
        expect((result as ForbiddenError).getUrl()).toEqual(noExceptionArgs.url);
        expect(result.getProperties()['url']).toBe(noExceptionArgs.url);
    });

    it('404 with exception should return NetworkError with NotFoundError message', () => {
        const result = initializeNetworkError({ ...withException(), httpStatusCode: 404 });
        expect(result instanceof NotFoundError).toBe(true);
        expect(result.message).toEqual('NotFoundError 404 http://localhost:3000');
    });

    it('404 without exception should return NetworkError with NotFoundError message', () => {
        const result = initializeNetworkError({ ...withoutException(), httpStatusCode: 404 });
        expect(result instanceof NotFoundError).toBe(true);
        expect(result.message).toEqual('NotFoundError 404 http://localhost:3000');
    });

    it('other status codes with exception should return NetworkError with BackendError as default', () => {
        const result = initializeNetworkError(withException());
        expect(result instanceof BackendError).toBe(true);
        expect(result.message).toEqual('BackendError 500 http://localhost:3000');
        expect(result.findPropertyByName('dummyProperty')).toBe(true);
    });

    it('other status codes without exception should return NetworkError as default', () => {
        const result = initializeNetworkError(withoutException());
        expect(result instanceof BackendError).not.toBe(true);
        expect(result instanceof NetworkError).toBe(true);
        expect(result.message).toEqual('NetworkError 500 http://localhost:3000');
        expect(result.findPropertyByName('dummyProperty')).toBe(undefined);
    });

    it('should return url as property', () => {
        const noExceptionArgs = withException();
        const result = initializeNetworkError(noExceptionArgs);
        expect((result as NetworkError).getUrl()).toEqual(noExceptionArgs.url);
        expect(result.getProperties()['url']).toBe(noExceptionArgs.url);
    });

    it('with exception should have custom property', () => {
        const withExceptionCustomProperty = withException();
        withExceptionCustomProperty.exception = { aCustomProperty: 'test custom property' };
        const result = initializeNetworkError(withExceptionCustomProperty);
        expect(result.findPropertyByName('aCustomProperty')).toBe(
            withExceptionCustomProperty.exception?.aCustomProperty
        );
    });
});
