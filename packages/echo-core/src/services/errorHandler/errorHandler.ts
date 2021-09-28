import { BaseError } from '@equinor/echo-base';
import { AnalyticsModule } from '../../services/analytics/analyticsModule';

type ErrorHandlerFunction = (exception: Error | BaseError | unknown, analyticsModule: AnalyticsModule) => void;
interface ErrorHandler {
    setErrorHandler: (handler: ErrorHandlerFunction) => void;
    handleErrors: ErrorHandlerFunction;
}

// TODO: Remove when handleErrors is properly moved (and possibly reworked) to Core from EchoPedia
export const errorHandler = ((): ErrorHandler => {
    let errorHandlerFunction: ErrorHandlerFunction | undefined;

    return {
        /**
         * Should be only used by EchopediaWeb, when bootstrapping Echo app.
         * Use this method the set the errorHandler from Echopedia to EchoCore, so it's available for others to use.
         * @param newErrorHandler {function} the new error handler to be set on Echo app initialization
         */
        setErrorHandler(newErrorHandler: ErrorHandlerFunction): void {
            if (!errorHandlerFunction) {
                errorHandlerFunction = newErrorHandler;
            } else {
                console.error(
                    '[EchoCore.errorHandler.setErrorHandler] Can not set errorHandler: an errorHandler is already set.'
                );
            }
        },
        /**
         * Calls a pre-set errorHandler. It should be set by EchopediaWeb.
         * Handles the error if BaseError.hasBeenLogged is false, by:
         * Logging the error, and also handles forbidden access.
         * Argument unknown is allowed to make it compatible with try / catch
         * @param exception {Error | BaseError | unknown} the error that caused the exception
         * @param analyticsModule {AnalyticsModule} the given Echo App's analyticsModule
         */
        handleErrors(exception: Error | BaseError | unknown, analyticsModule: AnalyticsModule): void {
            if (errorHandlerFunction) {
                errorHandlerFunction(exception, analyticsModule);
            } else {
                console.error(
                    '[EchoCore.errorHandler.handleErrors]: There is no errorHandler to call. Use EchoCore.setErrorHandler to set one.'
                );
            }
        }
    };
})();
