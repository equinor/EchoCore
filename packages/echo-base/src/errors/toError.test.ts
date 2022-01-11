import { BaseError } from './BaseError';
import { ForbiddenError } from './NetworkError';
import { ImproperErrorObject, toError } from './toError';

describe('ConvertToErrorIfNeeded', () => {
    it('should return error if error', () => {
        const error = new Error('error');
        const actual = toError(error);
        expect(actual).toBe(error);
    });

    it('should return baseError if baseError', () => {
        const error = new BaseError({ name: 'BaseError', message: 'error' });
        const actual = toError(error);
        expect(actual).toBe(error);
    });

    it('should return correct subType of baseError, eg should NotImplementedError if NotImplementedError', () => {
        const error = new ForbiddenError({ httpStatusCode: 403, url: 'https://fakeurl' });
        const actual = toError(error);
        expect(actual).toBe(error);
    });

    it(`should convert 'string' to NotAProperErrorObject`, () => {
        try {
            throw 'this is not a proper error';
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new ImproperErrorObject({
                message: 'this is not a proper error',
                innerError: { errorArgumentType: 'string' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`should convert '42' to NotAProperErrorObject`, () => {
        try {
            throw 42;
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new ImproperErrorObject({
                message: '42',
                innerError: { errorArgumentType: 'number' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`should convert 'false' to NotAProperErrorObject`, () => {
        try {
            throw false;
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new ImproperErrorObject({
                message: 'false',
                innerError: { errorArgumentType: 'boolean' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`should convert 'symbol' to NotAProperErrorObject`, () => {
        try {
            throw Symbol('key');
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new ImproperErrorObject({
                message: 'Symbol(key)',
                innerError: { errorArgumentType: 'symbol' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`should convert 'object' to NotAProperErrorObject, and keep all properties`, () => {
        try {
            throw { prop1: 'a', name: 'name', message: 'message' };
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new ImproperErrorObject({
                message: 'name message',
                innerError: { prop1: 'a', name: 'name', message: 'message a', errorArgumentType: 'object' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`should convert 'class not extending error' to NotAProperErrorObject, and keep all properties`, () => {
        try {
            throw new CustomErrorNotExtendingError();
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new ImproperErrorObject({
                message: 'name message a',
                innerError: { prop1: 'a', name: 'name', message: 'message a', errorArgumentType: 'object' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });
});

class CustomErrorNotExtendingError {
    private prop1: string;
    name: string;
    message: string;
    constructor() {
        this.prop1 = 'a';
        this.name = 'name';
        this.message = 'message ' + this.prop1;
    }
}
