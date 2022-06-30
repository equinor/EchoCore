import { BaseError } from './BaseError';
import { errorUtils } from './errorUtils';
import { BackendError, ForbiddenError, NetworkError, NotFoundError, UnauthorizedError } from './NetworkError';

describe('errorUtils.is', () => {
    it('is.error', () => {
        expect(errorUtils.is.error('invalid Error' as unknown as Error)).toBe(false);
        expect(errorUtils.is.error(new Error())).toBe(true);
        expect(errorUtils.is.error(new NetworkError({ httpStatusCode: 400, url: 'test' }))).toBe(true);
    });

    it('is.baseError', () => {
        expect(errorUtils.is.baseError(new Error())).toBe(false);
        expect(errorUtils.is.baseError(new BaseError({ name: '', message: '' }))).toBe(true);
    });

    it('is.networkError', () => {
        expect(errorUtils.is.networkError(new Error())).toBe(false);
        expect(errorUtils.is.networkError(new NetworkError({ httpStatusCode: 0, url: 'test' }))).toBe(true);
        expect(errorUtils.is.networkError(new NetworkError({ httpStatusCode: 400, url: 'test' }))).toBe(true);
    });

    it('is.backendError', () => {
        expect(errorUtils.is.backendError(new Error())).toBe(false);
        expect(errorUtils.is.backendError(new NetworkError({ httpStatusCode: 0, url: 'test' }))).toBe(false);
        expect(errorUtils.is.backendError(new BackendError({ httpStatusCode: 400, url: 'test' }))).toBe(true);
    });

    it('is.notFoundError', () => {
        expect(errorUtils.is.notFoundError(new Error())).toBe(false);
        expect(errorUtils.is.notFoundError(new NetworkError({ httpStatusCode: 400, url: 'test' }))).toBe(false);
        expect(errorUtils.is.notFoundError(new NetworkError({ httpStatusCode: 404, url: 'test' }))).toBe(true);
        expect(errorUtils.is.notFoundError(new NotFoundError({ httpStatusCode: 404, url: 'test' }))).toBe(true);
        expect(
            errorUtils.is.notFoundError(new NotFoundError({ httpStatusCode: 500, url: 'test', name: 'NotFoundError' }))
        ).toBe(true);
    });

    it('is.forbiddenError', () => {
        expect(errorUtils.is.forbiddenError(new Error())).toBe(false);
        expect(errorUtils.is.forbiddenError(new NetworkError({ httpStatusCode: 400, url: 'test' }))).toBe(false);
        expect(errorUtils.is.forbiddenError(new UnauthorizedError({ httpStatusCode: 401, url: 'test' }))).toBe(false);
        expect(errorUtils.is.forbiddenError(new ForbiddenError({ httpStatusCode: 403, url: 'test' }))).toBe(true);
        expect(
            errorUtils.is.forbiddenError(
                new UnauthorizedError({ httpStatusCode: 500, url: 'test', name: 'ForbiddenError' })
            )
        ).toBe(true);
    });

    it('is.forbiddenError', () => {
        expect(errorUtils.is.unauthorizedError(new Error())).toBe(false);
        expect(errorUtils.is.unauthorizedError(new NetworkError({ httpStatusCode: 400, url: 'test' }))).toBe(false);
        expect(errorUtils.is.unauthorizedError(new ForbiddenError({ httpStatusCode: 403, url: 'test' }))).toBe(false);
        expect(errorUtils.is.unauthorizedError(new UnauthorizedError({ httpStatusCode: 401, url: 'test' }))).toBe(true);
        expect(
            errorUtils.is.unauthorizedError(
                new ForbiddenError({ httpStatusCode: 500, url: 'test', name: 'UnauthorizedError' })
            )
        ).toBe(true);
    });
});
