import BaseError from '../../errors/BaseError';

describe('BaseError', () => {
    const message = 'Base Error Testing';
    const exception = { UnhandledException: 'source unknown' };

    const baseError = new BaseError(message, exception);

    it('should not be logged', () => {
        expect(baseError.hasBeenLogged).toBeFalsy();
    });

    it('check properties', () => {
        const properties = {
            UnhandledException: 'source unknown',
            extra: 123
        };
        baseError.addProperties({ extra: 123 });
        expect(baseError.getProperties()).toEqual(properties);
    });
});
