import BaseError from './BaseError';
import { BackendError, ForbiddenError, NetworkError, NotFoundError, ValidationError } from './network';
import { ErrorInitializerFunction, NetworkErrorArgs } from './types';

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

export const handleClientError = (
    exception: Record<string, unknown>,
    statusCode: number,
    endpoint: string
): NetworkError => {
    const args: NetworkErrorArgs = {
        message: '',
        httpStatusCode: statusCode,
        url: endpoint,
        exception
    };
    const errorInstance = initializeError(NetworkError, args);

    return errorInstance as NetworkError;
};
