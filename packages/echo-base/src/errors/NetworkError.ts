import { CommonErrorArgs } from '../types/error';
import { BaseError } from './BaseError';

export interface NetworkErrorArgs extends CommonErrorArgs {
    name?: string;
    exception?: Record<string, unknown>;
    httpStatusCode: number;
    url: string;
    message?: string;
}

/**
 * Network Error class represent a Network error ocurred during any given HTTP request
 * @param message an error message in human readable format
 * @param httpStatusCode HTTP error code
 * @param url A URL endpoint where the connection was initiated
 * @param exception a generated exception
 * @export
 * @class NetworkError
 * @extends {BaseError}
 */
export class NetworkError extends BaseError {
    constructor({ name, message, httpStatusCode, url, exception }: NetworkErrorArgs) {
        super({ name: name ?? 'NetworkError', message: message || '', exception });
        this.addProperties({ url, httpStatusCode });
        !message && (this.message = `${this.name} ${httpStatusCode} ${url}`);
    }

    getUrl = (): string => {
        return this.properties.url as string;
    };
}

export class BadRequestError extends NetworkError {
    constructor(args: NetworkErrorArgs) {
        super({ ...args, name: args.name ?? 'BadRequestError' });
    }
}

export class BackendError extends NetworkError {
    constructor(args: NetworkErrorArgs) {
        super({ ...args, name: args.name ?? 'BackendError' });
    }
}
export class ForbiddenError extends NetworkError {
    constructor(args: NetworkErrorArgs) {
        super({ ...args, name: args.name ?? 'ForbiddenError' });
    }
}
export class UnauthorizedError extends ForbiddenError {
    constructor(args: NetworkErrorArgs) {
        super({ ...args, name: args.name ?? 'UnauthorizedError' });
    }
}
export class NotFoundError extends NetworkError {
    constructor(args: NetworkErrorArgs) {
        super({ ...args, name: args.name ?? 'NotFoundError' });
    }
}
export class ValidationError extends NetworkError {
    constructor(args: NetworkErrorArgs) {
        super({ ...args, name: args.name ?? 'ValidationError' });
    }
}
