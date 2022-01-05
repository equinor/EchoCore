import { BaseErrorArgs } from '../types/error';

/**
 * Base Error class is intended to be used as a base class for every type of Error generated
 * @param message an error message in human readable format
 * @param exception a generated exception provided as a {Record<string, unknown>} type
 * Add custom properties in exception as desired
 * like: .exception = { aCustomProperty: 'test custom property' };
 * access with: .getProperties()['aCustomProperty']
 * @export
 * @class BaseError
 * @extends {Error}
 */
export class BaseError extends Error {
    protected innerError?: Record<string, unknown> | Error;
    hasBeenLogged = false;

    constructor({ name, message, innerError }: BaseErrorArgs) {
        super(message);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BaseError);
        }
        /**
         * Object.setPrototypeOf(this, new.target.prototype);: to fix instance of:
         * https://stackoverflow.com/questions/55065742/implementing-instanceof-checks-for-custom-typescript-error-instances
         * https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, new.target.prototype);

        this.innerError = innerError;

        const fallBackNameWillBeObfuscatedInProduction = this.constructor.name;
        this.name = name ?? fallBackNameWillBeObfuscatedInProduction;

        if (!message) {
            this.message = this.name;
        }
    }

    getInnerError(): Record<string, unknown> | Error | undefined {
        return this.innerError;
    }

    getInnerErrorProperties(): Record<string, unknown> | Error {
        return getAllProperties(this.innerError);
    }

    getProperties(): Record<string, unknown> | Error {
        return getAllProperties(this);
    }

    tryToFindPropertyByName(propertyName: string): unknown | undefined {
        return tryToFindPropertyByName(this, propertyName);
    }
}

//TODO check if we have unitTest for missing property should return undefined
export function tryToFindPropertyByName(
    object: Record<string, unknown> | Error,
    propertyName: string
): unknown | undefined {
    const properties = getAllProperties(object);
    const value = properties[propertyName];
    if (value) {
        return value;
    }

    const innerProperties = properties['innerError'] as Record<string, unknown>; //TODO check that this is working after prod build obfuscation
    if (innerProperties) {
        return tryToFindPropertyByName(innerProperties, propertyName);
    }
}

/**
 * Converts an object to a Record<string, unknown>.
 * Useful for logging errors to AppInsight, and preserve all properties of an Error.
 * Supports custom Error which has public or private fields. Will ignore any functions on the Error object.
 * It does not support cycling error references.
 * @param objectWithProperties an object containing properties
 * @returns a record containing all properties of the object
 */
export function getAllProperties(
    objectWithProperties: Record<string, unknown> | Error | undefined
): Record<string, unknown> {
    if (!objectWithProperties) {
        return {};
    }

    const names = objectWithProperties ? Object.getOwnPropertyNames(objectWithProperties) : [];
    if (objectWithProperties instanceof Error && !names.includes('name')) {
        names.push('name');
    }
    if (objectWithProperties instanceof Error && !names.includes('message')) {
        names.push('message');
    }

    const object = objectWithProperties as Record<string, unknown>;

    const rec: Record<string, unknown> = {};
    names.forEach((name) => {
        const value = object[name];
        const valueType = typeof value;
        if (valueType === 'function' || name === 'hasBeenLogged') {
            //ignore
        } else if (value instanceof Error) {
            rec[name] = getAllProperties(value);
        } else {
            rec[name] = value;
        }
    });
    return rec;
}
