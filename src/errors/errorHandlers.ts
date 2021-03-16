import { NetworkError } from '..';
import BaseError from './BaseError';
import { CommonErrorArgs, ErrorInitializerFunction, NetworkErrorArgs } from './types';

function factory<T extends BaseError, U extends CommonErrorArgs>(ErrorType: { new (args): T }, args: U): BaseError {
    const errorInstance: T = new ErrorType(args);
    return errorInstance;
}

const handleError = (errorInstance) => {
    console.log('handle >', errorInstance);
};

const initializeError: ErrorInitializerFunction<NetworkError, NetworkErrorArgs> = (
    ErrorType,
    args,
    extentionFunction
) => {
    let errorInstance: BaseError;
    if (args.exception?.errors) {
        const { exception, statusCode } = args;
        const isValidationError = exception.title && (exception.title as string).toLowerCase().includes('validation');
        switch (statusCode) {
            case 400:
                if (isValidationError) {
                    errorInstance = new ErrorType({ ...args, message: 'ValidationError' });
                    break;
                }
            case 403:
                errorInstance = new ErrorType({ ...args, message: 'ForbiddenError' });
                break;

            case 404:
                errorInstance = new ErrorType({ ...args, message: 'NotFoundError' });
                break;
            default:
                errorInstance = new ErrorType({ ...args, message: 'BackendError' });
                break;
        }
    } else {
        errorInstance = extentionFunction ? extentionFunction() : new ErrorType(args);
    }

    return errorInstance;
};

export function handleClientError(
    exception: Record<string, unknown>,
    statusCode: number,
    endpoint: string,
    customHandler?: (errorInstance: BaseError) => void
): BaseError {
    const args: NetworkErrorArgs = {
        message: '',
        httpStatusCode: statusCode,
        url: endpoint,
        exception
    };
    const errorInstance = initializeError(NetworkError, args);
    customHandler?.(errorInstance) || handleError(errorInstance);

    return errorInstance;
}
