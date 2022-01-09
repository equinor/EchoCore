import { BaseError } from '@equinor/echo-base';
import { errorToExceptionTelemetry } from './errorToExceptionTelemetry';

const defaultArgs = {
    sessionKey: 'key',
    moduleName: 'moduleName',
    instCode: 'JSV',
    userCompany: 'company'
};

describe('errorToExceptionTelemetry', () => {
    it(`should log all all properties of error and 2 nested inner Errors of different types`, () => {
        // setup
        const nestedInnerError2 = new CustomInnerError('inner 2 message');
        nestedInnerError2.stack = 'ignore';

        const nestedInnerError1 = new CustomBaseError({ message: 'inner 1 message', error: nestedInnerError2 });
        nestedInnerError1.stack = 'ignore';
        nestedInnerError1.errorTraceId = 'ignore';

        const outerError = new BaseError({
            name: 'BaseError',
            message: 'outer message',
            innerError: nestedInnerError1
        });
        outerError.stack = 'ignore';
        outerError.errorTraceId = 'ignore';
        //when
        const actual = errorToExceptionTelemetry({ error: outerError, ...defaultArgs });

        //then
        const expected = {
            exception: outerError,
            properties: {
                ...defaultArgs,
                errorType: 'BaseError',
                name: 'BaseError',
                message: 'outer message',
                stack: 'ignore',
                errorTraceId: 'ignore',

                innerError: {
                    customBaseField: 'public1',
                    customBasePrivateField: 'private1',
                    message: 'inner 1 message',
                    name: 'CustomBaseError',
                    stack: 'ignore',
                    errorTraceId: 'ignore',

                    innerError: {
                        anotherField: 'another value',
                        message: 'inner 2 message',
                        name: 'Inner CustomError',
                        stack: 'ignore'
                    }
                }
            },
            severityLevel: 3
        };
        expect(actual).toEqual(expected);
    });
});

class CustomInnerError extends Error {
    anotherField: string;
    constructor(message: string) {
        super(message);
        this.name = 'Inner CustomError';
        this.anotherField = 'another value';
    }
}

class CustomBaseError extends BaseError {
    customBaseField: string;
    private customBasePrivateField: string;
    constructor(args: { message: string; error?: Error }) {
        super({ name: 'CustomBaseError', message: args.message, innerError: args.error });

        this.customBaseField = 'public1';
        this.customBasePrivateField = 'private1';
    }
}
