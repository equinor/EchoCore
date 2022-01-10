import { BaseError, findPropertyByName, getAllProperties } from './BaseError';

describe('BaseError', () => {
    const message = 'This is a custom error message for testing';

    it('should initialize with correct values', () => {
        const actualError = new BaseError({ name: 'BaseError', message });

        expect(actualError.message).toBe(message);
        expect(actualError.name).toBe('BaseError');
        expect(actualError.stack).toBeTruthy();
    });

    it('should preserve innerError with properties', () => {
        const innerMessage = 'inner message';
        const innerError = new CustomTestError(innerMessage);
        const actualError = new BaseError({ name: 'BaseError', message, innerError });

        expect(actualError.message).toBe(message);
        expect(actualError.name).toBe('BaseError');
        expect(actualError.stack).toBeTruthy();

        const actualProperties = actualError.getInnerErrorProperties();
        actualProperties.stack = actualProperties.stack ? 'stack' : actualProperties.stack;
        expect(actualProperties).toStrictEqual({
            name: 'CustomTestError',
            anotherProperty: 'another value',
            message: innerMessage,
            stack: 'stack'
        });
    });

    it(`should generate frontEnd errorTraceId if it doesn't already exist`, () => {
        const actualError = new BaseError({ name: 'BaseError', message });

        expect(actualError.errorTraceId).toBe('frontEnd_mocked-static-id-9999');
    });

    it(`should preserve errorTraceId of innerError/backEnd if it exist`, () => {
        const innerError = { errors: { errorTraceId: 'backendErrorTraceId' } };
        const actualError = new BaseError({ name: 'BaseError', message, innerError });

        expect(actualError.errorTraceId).toBe('backendErrorTraceId');
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
            anotherProperty: 'another value',
            message: 'message',
            stack: 'stack'
        });
    });
});

describe('findPropertyByName', () => {
    const message = 'This is a custom error message for testing';

    it('should find message on baseError', () => {
        const error = new BaseError({ name: 'BaseError', message });
        const actualPropertyMessage = findPropertyByName(error, 'message');
        expect(actualPropertyMessage).toBe(message);
    });

    it('should find first message on baseError instead of message on innerError', () => {
        const error = new BaseError({
            name: 'BaseError',
            message,
            innerError: new BaseError({ name: 'inner', message: 'test' })
        });
        const actualPropertyMessage = findPropertyByName(error, 'message');
        expect(actualPropertyMessage).toBe(message);
    });

    it(`should return undefined if property doesn't exist`, () => {
        const error = new BaseError({
            name: 'BaseError',
            message
        });
        const actualPropertyMessage = findPropertyByName(error, 'message2');
        expect(actualPropertyMessage).toBe(undefined);
    });

    it('should find property on nested innerError of type Record', () => {
        const error = new BaseError({
            name: 'BaseError',
            message,
            innerError: { errors: { innerProperty: 1 } }
        });
        const actualPropertyMessage = findPropertyByName(error, 'innerProperty');
        expect(actualPropertyMessage).toBe(1);
    });

    it('should find property on nested innerError of type customError', () => {
        const error = new BaseError({
            name: 'BaseError',
            message,
            innerError: new CustomTestError('test')
        });
        const actualPropertyMessage = findPropertyByName(error, 'anotherProperty');
        expect(actualPropertyMessage).toBe('another value');
    });
});

class CustomTestError extends Error {
    anotherProperty: string;
    constructor(message: string) {
        super(message);
        this.name = 'CustomTestError';
        this.anotherProperty = 'another value';
    }
}
