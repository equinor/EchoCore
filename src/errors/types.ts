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

export interface BaseErrorArgs {
    message: string;
    exception?: Record<string, unknown>;
}

export interface NetworkErrorArgs {
    message: string;
    httpStatusCode: number;
    url: string;
    exception: Record<string, unknown>;
}

export interface CommonErrorArgs {
    message: string;
    httpStatusCode: number;
    url: string;
    exception: Record<string, unknown>;
    [key: string]: unknown;
}
