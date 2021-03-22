import { isNullOrEmpty } from '../../utils/stringUtils';
import BaseError from '../BaseError';
import { CommonErrorArgs } from '../types';

export interface NetworkErrorArgs extends CommonErrorArgs {
    exception: Record<string, unknown>;
    httpStatusCode: number;
    url: string;
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
export default class NetworkError extends BaseError {
    constructor({ message, httpStatusCode, url, exception }: NetworkErrorArgs) {
        super({ message, exception });
        this.addProperties({ url, httpStatusCode });
        isNullOrEmpty(message) && (this.message = `${this.name} ${httpStatusCode} ${url}`);
    }

    getUrl = (): string => {
        return this.properties.url as string;
    };
}
