import { BaseError } from '../../errors';

describe('BaseError', () => {
    const message = 'Base Error Testing';
    const innerError = { UnhandledException: 'source unknown' };

    const baseError = new BaseError({ name: 'BaseError', message, innerError });

    it('should not be logged', () => {
        expect(baseError.hasBeenLogged).toBeFalsy();
    });

    it('check innerError properties', () => {
        expect(baseError.getInnerError()).toEqual(innerError);
    });

    it('check BaseError name when message is empty', () => {
        const be = new BaseError({ name: 'BaseError', message: '', innerError });
        expect(be.message).toEqual(be.name);
    });

    it('check BaseError name when message is not empty', () => {
        const be = new BaseError({ name: 'BaseError', message, innerError });
        expect(be.message).not.toEqual(be.name);
    });
});
