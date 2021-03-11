import { isNullOrEmpty } from '../utils/stringUtils';
import { ErrorProperties } from './types';

/**
 * Base Error class is intended to be used as a base class for every type of Error generated
 * @param message an error message in human readible format
 * @param exception a generated exception provided as a {Record<string, unknown>} type
 * @export
 * @class BaseError
 * @extends {Error}
 */
export default class BaseError extends Error {
    protected properties: ErrorProperties;
    hasBeenLogged: boolean;

    constructor(message: string, exception: Record<string, unknown>) {
        super(message);
        this.properties = { ...exception };
        this.name = this.constructor.name;
        this.hasBeenLogged = false;

        if (isNullOrEmpty(message)) {
            this.message = this.name;
        }
    }

    getProperties = (): ErrorProperties => this.properties;

    addProperties = (values: ErrorProperties): void => {
        this.properties = { ...this.properties, ...values };
    };
}
