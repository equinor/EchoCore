import BaseError from './BaseError';
import { BackendError, ForbiddenError, NetworkError, NotFoundError, ValidationError } from './NetworkErrors';
import { ErrorInitializerFunction, NetworkErrorArgs } from './types';

const handleError = (errorInstance) => {
    console.log('handle >', errorInstance);
};

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
                        ? new ValidationError({ ...args, message: 'ValidationError' })
                        : new BackendError({ ...args, message: 'BackendError' });
                break;
            case 403:
                errorInstance = new ForbiddenError({ ...args, message: 'ForbiddenError' });
                break;
            case 404:
                errorInstance = new NotFoundError({ ...args, message: 'NotFoundError' });
                break;
            default:
                errorInstance = new BackendError({ ...args, message: 'BackendError' });
                break;
        }
    } else {
        errorInstance = new ErrorType({ args, message: 'NetworkError' });
    }
    return errorInstance;
};

export const handleClientError = (
    exception: Record<string, unknown>,
    statusCode: number,
    endpoint: string
): BaseError => {
    const args: NetworkErrorArgs = {
        message: '',
        httpStatusCode: statusCode,
        url: endpoint,
        exception
    };
    const errorInstance = initializeError(NetworkError, args);

    return errorInstance;
};
