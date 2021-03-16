import BaseError from './BaseError';
import NetworkError from './NetworkError';
import { CommonErrorArgs, ErrorInitializerFunction, NetworkErrorArgs } from './types';

const handleError = (errorInstance) => {
    console.log('handle >', errorInstance);
};

export const initializeError: ErrorInitializerFunction<NetworkError, NetworkErrorArgs> = (
    ErrorType,
    args,
    extendedInitializerFunction
) => {
    let errorInstance: BaseError;
    if (args.exception?.errors) {
        const { exception, httpStatusCode } = args;
        switch (httpStatusCode) {
            case 400:
                const message =
                    exception.title && (exception.title as string).toLowerCase().includes('validation')
                        ? 'ValidationError'
                        : 'BackendError';
                errorInstance = new ErrorType({ ...args, message });
                break;
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
        errorInstance = extendedInitializerFunction ? extendedInitializerFunction() : new ErrorType(args);
    }

    return errorInstance;
};

export const factory = <T extends BaseError, U extends CommonErrorArgs>(
    ErrorType: { new (args): T },
    args: U
): BaseError => {
    const errorInstance: T = new ErrorType(args);
    return errorInstance;
};

export const handleClientError = (
    exception: Record<string, unknown>,
    statusCode: number,
    endpoint: string,
    extendedInitializerFunction?: () => BaseError,
    customHandler?: (errorInstance: BaseError) => void
): BaseError => {
    const args: NetworkErrorArgs = {
        message: '',
        httpStatusCode: statusCode,
        url: endpoint,
        exception
    };
    const errorInstance = initializeError(NetworkError, args, extendedInitializerFunction);
    customHandler?.(errorInstance) || handleError(errorInstance);

    return errorInstance;
};
