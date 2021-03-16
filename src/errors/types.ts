import BaseError from './BaseError';

/**
 * ErrorProperties provides a general purpose object
 * for extending the number error porperties available
 * @export
 * @interface ErrorProperties
 */
export interface ErrorProperties {
    errors?: string | Record<string, unknown>;
    [key: string]: unknown; //support any properties in exception/error
}

export interface ErrorInitializerFunction<T extends BaseError, U extends CommonErrorArgs> {
    (ErrorType: { new (args): T }, args: U, extentionFunction?: () => BaseError): BaseError;
}

export interface BaseErrorArgs {
    message: string;
    exception?: Record<string, unknown>;
}

export interface CommonErrorArgs extends BaseErrorArgs {
    [key: string]: unknown;
}

export interface NetworkErrorArgs extends CommonErrorArgs {
    exception: Record<string, unknown>;
    httpStatusCode: number;
    url: string;
}
