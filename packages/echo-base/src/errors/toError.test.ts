import { BaseError } from './BaseError';
import { ForbiddenError } from './NetworkError';
import { NotAProperErrorObject, toError } from './toError';

describe('ConvertToErrorIfNeeded', () => {
    it('Should return error if error', () => {
        const error = new Error('error');
        const actual = toError(error);
        expect(actual).toBe(error);
    });

    it('Should return baseError if baseError', () => {
        const error = new BaseError({ message: 'error' });
        const actual = toError(error);
        expect(actual).toBe(error);
    });

    it('Should return correct subType of baseError, eg should NotImplementedError if NotImplementedError', () => {
        const error = new ForbiddenError({ httpStatusCode: 403, url: 'https://fakeurl' });
        const actual = toError(error);
        expect(actual).toBe(error);
    });

    it(`Should convert 'string' to NotAProperErrorObject`, () => {
        try {
            throw 'this is not a proper error';
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new NotAProperErrorObject({
                message: 'this is not a proper error',
                exception: { errorArgumentType: 'string' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`Should convert '42' to NotAProperErrorObject`, () => {
        try {
            throw 42;
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new NotAProperErrorObject({
                message: '42',
                exception: { errorArgumentType: 'number' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`Should convert 'false' to NotAProperErrorObject`, () => {
        try {
            throw false;
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new NotAProperErrorObject({
                message: 'false',
                exception: { errorArgumentType: 'boolean' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`Should convert 'symbol' to NotAProperErrorObject`, () => {
        try {
            throw Symbol('key');
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new NotAProperErrorObject({
                message: 'Symbol(key)',
                exception: { errorArgumentType: 'symbol' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`Should convert 'object' to NotAProperErrorObject, and keep all properties`, () => {
        try {
            throw { prop1: 'a', name: 'name', message: 'message' };
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new NotAProperErrorObject({
                message: 'name message',
                exception: { prop1: 'a', name: 'name', message: 'message a', errorArgumentType: 'object' }
            });

            expect(actual).toStrictEqual(expected);
        }
    });

    it(`Should convert 'class not extending error' to NotAProperErrorObject, and keep all properties`, () => {
        try {
            throw new CustomErrorNotExtendingError();
        } catch (error) {
            // when
            const actual = toError(error);

            // then
            const expected = new NotAProperErrorObject({
                message: 'name message a',
                exception: { prop1: 'a', name: 'name', message: 'message a', errorArgumentType: 'object' }
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
