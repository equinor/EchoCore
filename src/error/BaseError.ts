import { ErrorProperties } from '../utils/handleErrors';
import { isNullOrEmpty } from '../utils/stringUtils';

export class BaseError extends Error {
    properties: ErrorProperties;
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

    addProperties(values: ErrorProperties): void {
        this.properties = { ...this.properties, ...values };
    }
}
