import { BaseError, getAllProperties } from './BaseError';

describe('BaseError', () => {
    const message = 'this is a test';
    it('should initialize with correct values', () => {
        const actualError = new BaseError({ name: 'BaseError', message });
        expect(actualError.message).toBe(message);
        expect(actualError.name).toBe('BaseError');
        expect(actualError.stack).toBeTruthy();
    });

    it('should preserve innerError as properties', () => {
        const innerMessage = 'message';
        const innerException = new CustomError(innerMessage);
        const actualError = new BaseError({ name: 'BaseError', message, exception: innerException });
        expect(actualError.message).toBe(message);
        expect(actualError.name).toBe('BaseError');
        expect(actualError.stack).toBeTruthy();

        const actualProperties = actualError.getProperties();
        actualProperties.stack = actualProperties.stack ? 'stack' : actualProperties.stack;
        const expected = customErrorExpected();
        expect(actualProperties).toStrictEqual(expected);
    });
});

describe('getAllProperties', () => {
    const input = { a: 'a', b: 1, c: { nestedProp: 'prop1' } };

    it('should return an empty object if undefined argument', () => {
        const actualError = getAllProperties(undefined);
        expect(actualError).toStrictEqual({});
    });
    it('should preserve properties of different types', () => {
        const actualError = getAllProperties(input);
        expect(actualError).toStrictEqual(input);
    });

    it('should preserve properties of an Error', () => {
        const actualError = getAllProperties(new CustomError('message'));
        const expected = customErrorExpected();
        actualError.stack = actualError.stack ? 'stack' : actualError.stack;
        expect(actualError).toStrictEqual(expected);
    });
});

class CustomError extends Error {
    anotherField: string;
    constructor(message: string) {
        super(message);
        this.name = 'CustomError';
        this.anotherField = 'another value';
    }
}

function customErrorExpected(): {
    name: string;
    anotherField: string;
    message: string;
    stack: string;
} {
    return {
        name: 'CustomError',
        anotherField: 'another value',
        message: 'message',
        stack: 'stack'
    };
}
