import { BaseError, getAllProperties } from './BaseError';

describe('BaseError', () => {
    const message = 'This is a custom error message for testing';

    it('should initialize with correct values', () => {
        const actualError = new BaseError({ name: 'BaseError', message });

        expect(actualError.message).toBe(message);
        expect(actualError.name).toBe('BaseError');
        expect(actualError.stack).toBeTruthy();
    });

    it('should preserve innerError as properties', () => {
        const innerMessage = 'inner message';
        const innerError = new CustomTestError(innerMessage);
        const actualError = new BaseError({ name: 'BaseError', message, exception: innerError });

        expect(actualError.message).toBe(message);
        expect(actualError.name).toBe('BaseError');
        expect(actualError.stack).toBeTruthy();

        const actualProperties = actualError.getProperties();
        actualProperties.stack = actualProperties.stack ? 'stack' : actualProperties.stack;
        expect(actualProperties).toStrictEqual({
            name: 'CustomTestError',
            anotherField: 'another value',
            message: innerMessage,
            stack: 'stack'
        });
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
        const actualError = getAllProperties(new CustomTestError('message'));

        actualError.stack = actualError.stack ? 'stack' : actualError.stack;
        expect(actualError).toStrictEqual({
            name: 'CustomTestError',
            anotherField: 'another value',
            message: 'message',
            stack: 'stack'
        });
    });
});

class CustomTestError extends Error {
    anotherField: string;
    constructor(message: string) {
        super(message);
        this.name = 'CustomTestError';
        this.anotherField = 'another value';
    }
}
