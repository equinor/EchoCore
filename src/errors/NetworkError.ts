import { isNullOrEmpty } from '../utils/stringUtils';
import BaseError from './BaseError';

/**
 * Network Error class represent a Network error ocurred during any given HTTP request
 * @param message an error message in human readible format
 * @param httpStatusCode HTTP error code
 * @param url A URL endpoint where the connection was initiated
 * @param exception a generated exception
 * @export
 * @class NetworkError
 * @extends {BaseError}
 */
export default class NetworkError extends BaseError {
    constructor(message: string, httpStatusCode: number, url: string, exception: Record<string, unknown>) {
        super(message, exception);

        this.addProperties({ url, httpStatusCode });
        if (isNullOrEmpty(message)) {
            this.message = `${this.name} ${httpStatusCode} ${url}`;
        }
    }

    getUrl = (): string => {
        return this.properties.url;
    };
}
