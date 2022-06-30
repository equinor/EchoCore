import { BaseError, getAllProperties } from '../../errors';
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

    it('check NetworkError properties', () => {
        const properties = {
            hasBeenLogged: false,
            httpStatusCode,
            url,
            message: 'Network Error Testing',
            name: 'NetworkError',
            innerError: getAllProperties(exception),
            stack: 'ignore',
            errorTraceId: 'frontEnd_mocked-static-id-9999'
        };

        const actualProperties = nwError.getProperties();
        actualProperties.stack = 'ignore';
        expect(actualProperties).toEqual(properties);
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

describe('NetworkError & subclasses', () => {
    const message = 'Network Error Testing';
    const httpStatusCode = 500;
    const url = 'http://localhost:3000';
    const exception = { NetworkException: 'endpoint is unreachable' };

    const networkArgs = { message, httpStatusCode, url, exception };
    const expectedProperties = {
        message,
        hasBeenLogged: false,
        httpStatusCode,
        url,
        innerError: exception,
        stack: 'ignore',
        errorTraceId: 'frontEnd_mocked-static-id-9999'
    };

    test.each([
        ['NetworkError', new NetworkError(networkArgs)],
        ['BadRequestError', new BadRequestError(networkArgs)],
        ['ForbiddenError', new ForbiddenError(networkArgs)],
        ['UnauthorizedError', new UnauthorizedError(networkArgs)],
        ['NotFoundError', new NotFoundError(networkArgs)],
        ['ValidationError', new ValidationError(networkArgs)],
        ['BackendError', new BackendError(networkArgs)]
    ])('%p should preserve default name, message and properties', (firstArg, secondArg) => {
        const error = secondArg as BaseError;
        expect(error.name).toBe(firstArg);
        expect(error.message).toBe(message);
        const properties = error.getProperties();
        properties.stack = 'ignore';
        expect(properties).toStrictEqual({ name: firstArg, ...expectedProperties });
    });

    test.each([
        ['NetworkError', new NetworkError({ name: 'CustomTestName', ...networkArgs })],
        ['BadRequestError', new BadRequestError({ name: 'CustomTestName', ...networkArgs })],
        ['ForbiddenError', new ForbiddenError({ name: 'CustomTestName', ...networkArgs })],
        ['UnauthorizedError', new UnauthorizedError({ name: 'CustomTestName', ...networkArgs })],
        ['NotFoundError', new NotFoundError({ name: 'CustomTestName', ...networkArgs })],
        ['ValidationError', new ValidationError({ name: 'CustomTestName', ...networkArgs })],
        ['BackendError', new BackendError({ name: 'CustomTestName', ...networkArgs })]
    ])('%p should preserve _custom_ name, message and properties', (firstArg, secondArg) => {
        const error = secondArg as BaseError;
        expect(error.name).toBe('CustomTestName');
        expect(error.message).toBe(message);

        const properties = error.getProperties();
        properties.stack = 'ignore';
        expect(properties).toStrictEqual({ name: 'CustomTestName', ...expectedProperties });
    });
});
