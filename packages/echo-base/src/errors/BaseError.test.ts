import { BaseError, findPropertyByName, getAllProperties } from './BaseError';

describe('BaseError', () => {
    const message = 'This is a custom error message for testing';

    it('should initialize with correct values', () => {
        const actualError = new BaseError({ name: 'BaseError', message });

        expect(actualError.message).toBe(message);
        expect(actualError.name).toBe('BaseError');
        expect(actualError.stack).toBeTruthy();
        expect(actualError.errorTraceId.includes('frontEnd')).toBeTruthy();
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

    it(`should generate frontEnd stackTraceId if innerError/backEnd stackTraceId is null`, () => {
        const innerError = { errors: { errorTraceId: null } };
        const actualError = new BaseError({ name: 'BaseError', message, innerError });

        expect(actualError.errorTraceId.includes('frontEnd')).toBeTruthy();
    });
});

describe('getAllProperties', () => {
    it('should return an empty object if undefined argument', () => {
        const actualError = getAllProperties(undefined);
        expect(actualError).toStrictEqual({});
    });

    it('should preserve properties of different types', () => {
        const input = { a: 'a', b: 1, c: { nestedProp: 'prop1' } };
        const actualError = getAllProperties(input);
        expect(actualError).toStrictEqual(input);
    });

    it('should preserve null & undefined value', () => {
        const input = { c: { nestedProp: null, nestedProp2: undefined } };
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

describe('getAllProperties.ignore', () => {
    it('ignoreEquals should ignore all properties specified, including nested object', () => {
        const input = { abc: 'a', bcd: 1, cde: { nestedProp: 'prop1', abc: '123' } };
        const actualError = getAllProperties(input, { ignoreEquals: ['abc', 'bcd'] });
        expect(actualError).toStrictEqual({ cde: { nestedProp: 'prop1' } });
    });

    it('ignoreIncludes should ignore all properties specified, including nested object', () => {
        const input = { abc: 'a', bcd: 1, ddd: { nestedProp: 'prop1', bc: '123' } };
        const actualError = getAllProperties(input, { ignoreIncludes: ['a', 'c'] });
        expect(actualError).toStrictEqual({ ddd: { nestedProp: 'prop1' } });
    });

    it('ignore should handle both equals and includes at the same time, and it should be case insensitive', () => {
        const input = { stack: 'a', bcd: 1, ddd: { innerStack: 'prop1', Y: '1', N: '0' } };
        const actualError = getAllProperties(input, { ignoreIncludes: ['stack'], ignoreEquals: ['y'] });
        expect(actualError).toStrictEqual({ bcd: 1, ddd: { N: '0' } });
    });
});

describe('findPropertyByName', () => {
    const message = 'This is a custom error message for testing';

    it('should find message on baseError', () => {
        const error = new BaseError({ name: 'BaseError', message });
        const actualPropertyMessage = findPropertyByName(error, 'message');
        expect(actualPropertyMessage).toBe(message);
    });

    it('should return found boolean with value false and true', () => {
        const error = new BaseError({ name: 'BaseError', message });
        expect(findPropertyByName(error, 'hasBeenLogged')).toBe(false);
        error.hasBeenLogged = true;
        expect(findPropertyByName(error, 'hasBeenLogged')).toBe(true);
    });

    it('should return found string which has empty value', () => {
        const error = new BaseError({
            name: 'BaseError',
            message,
            innerError: { stringProperty: '', nestedObject: { innerStringProperty: '' } }
        });
        expect(findPropertyByName(error, 'stringProperty')).toBe('');
        expect(findPropertyByName(error, 'innerStringProperty')).toBe('');
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

    it('should not find property on nested innerError if deepSearch is false', () => {
        const error = new BaseError({
            name: 'BaseError',
            message,
            innerError: { errors: { innerProperty: 1 } }
        });
        const deepSearch = false;
        const actualPropertyMessage = findPropertyByName(error, 'innerProperty', deepSearch);
        expect(actualPropertyMessage).toBe(undefined);
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
