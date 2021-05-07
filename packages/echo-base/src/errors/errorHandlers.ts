import { ErrorInitializerFunction } from '../types/error';
import { BaseError } from './BaseError';
import {
    BackendError,
    ForbiddenError,
    NetworkError,
    NetworkErrorArgs,
    NotFoundError,
    ValidationError
} from './NetworkError';

export const initializeError: ErrorInitializerFunction<NetworkError, NetworkErrorArgs> = (
    ErrorType,
    args
): BaseError => {
    let errorInstance: BaseError;
    if (args.exception?.errors) {
        const { exception, httpStatusCode } = args;
        switch (httpStatusCode) {
            case 400:
                errorInstance =
                    exception.title && (exception.title as string).toLowerCase().includes('validation')
                        ? new ValidationError(args)
                        : new BackendError(args);
                break;
            case 403:
                errorInstance = new ForbiddenError(args);
                break;
            case 404:
                errorInstance = new NotFoundError(args);
                break;
            default:
                errorInstance = new BackendError(args);
                break;
        }
    } else {
        errorInstance = new ErrorType(args);
    }
    return errorInstance;
};
