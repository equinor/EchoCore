import { ErrorInitializerFunction } from '../types/error';
import { BaseError } from './BaseError';
import {
    BackendError,
    BadRequestError,
    ForbiddenError,
    NetworkError,
    NetworkErrorArgs,
    NotFoundError,
    UnauthorizedError,
    ValidationError
} from './NetworkError';

/**
 * Tries to initialize an error to specific type.
 * Returns:
 * @type {ValidationError} if 400 and with property exception.title which includes value 'validation'
 * @type {UnauthorizedError} if 401
 * @type {ForbiddenError} if 403
 * @type {NotFoundError} if 404
 * @type {BackendError} if it includes property exception (since echopedia api returns an error with this format)
 * @type {BadRequestError} if 400
 * Fall backs to ErrorType with @type {NetworkError} as base, if none of the above constraints are fulfilled
 * @param ErrorType Default error type to return if no match
 * @param args Arguments to initialize error with. Add custom properties in args.exception as desired,
 * like: .exception = { aCustomProperty: 'test custom property' };
 * access with: .getProperties()['aCustomProperty']
 * @returns Specific error type with base as type
 */
export const initializeError: ErrorInitializerFunction<NetworkError, NetworkErrorArgs> = (
    ErrorType,
    args
): BaseError => {
    switch (args.httpStatusCode) {
        case 400:
            if (args.exception?.title && (args.exception?.title as string).toLowerCase().includes('validation'))
                return new ValidationError(args);
            break;
        case 401:
            return new UnauthorizedError(args);
        case 403:
            return new ForbiddenError(args);

        case 404:
            return new NotFoundError(args);
    }

    if (args.httpStatusCode > 0 && args.httpStatusCode < 550 && args.exception) return new BackendError(args); //our backEnd return a json property called exception.
    if (args.httpStatusCode == 400) return new BadRequestError(args);

    return new ErrorType(args);
};
