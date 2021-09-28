import { errorHandler } from '../../../src/services/errorHandler/errorHandler';

describe('errorHandler', () => {
    describe('setErrorHandler()', () => {
        it('should set an errorHandler function', () => {
            // given
            const testErrorHandlerFunc = jest.fn();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const params: any = {
                error: new Error('custom error'),
                analyticsModule: undefined
            };

            // when
            errorHandler.setErrorHandler(testErrorHandlerFunc);
            errorHandler.handleErrors(params.error, params.analyticsModule);

            // then
            expect(testErrorHandlerFunc).toHaveBeenCalledTimes(1);
            expect(testErrorHandlerFunc).toHaveBeenCalledWith(params.error, params.analyticsModule);
        });
    });
});
