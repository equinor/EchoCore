import { BaseErrorArgs } from '../types/error';
import { randomId } from './randomHelper';

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
    errorTraceId: string;

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
        this.fixMissingErrorTraceId(innerError);

        const fallBackNameWillBeObfuscatedInProduction = this.constructor.name;
        this.name = name ?? fallBackNameWillBeObfuscatedInProduction;

        if (!message) {
            this.message = this.name;
        }
    }

    private fixMissingErrorTraceId(innerError: Error | Record<string, unknown>): void {
        if (this.errorTraceId) return;

        const maybeErrorTraceIdFromBackend = findPropertyByName(innerError, 'errorTraceId') as string;
        this.errorTraceId = maybeErrorTraceIdFromBackend ?? `frontEnd_${randomId()}`;
    }

    /**
     * Recursively converts all properties (included nested innerErrors) to type of Record<string, unknown>
     * @returns The converted properties as Record<string, unknown>, or an empty object
     */
    getProperties(): Record<string, unknown> {
        return getAllProperties(this);
    }

    /**
     * Returns the innerError or undefined
     * @returns innerError or undefined
     */
    getInnerError(): Record<string, unknown> | Error | undefined {
        return this.innerError;
    }

    /**
     * Recursively converts all properties of innerError to type of Record<string, unknown>
     * @returns The converted properties of innerError as Record<string, unknown>, or an empty object
     */
    getInnerErrorProperties(): Record<string, unknown> {
        return getAllProperties(this.innerError);
    }

    /**
     * Find a property with the specified propertyName.
     * @param propertyName the name of the property to find
     * @param deepSearch default true, also search nested objects
     * @returns the value of the property found or undefined
     */
    findPropertyByName(propertyName: string, deepSearch = true): unknown | undefined {
        return findPropertyByName(this, propertyName, deepSearch);
    }
}

/**
 * Find a property with the specified propertyName on the object
 * @param object the object to search
 * @param propertyName the name of the property to find
 * @param deepSearch default true, also search nested objects
 * @returns the value of the property found or undefined
 */
export function findPropertyByName(
    object: Record<string, unknown> | object,
    propertyName: string,
    deepSearch = true
): unknown | undefined {
    const properties = getAllProperties(object);
    if (properties.hasOwnProperty(propertyName)) {
        return properties[propertyName];
    }

    let maybeFound: unknown = undefined;

    if (deepSearch) {
        const propertyNames = properties ? Object.getOwnPropertyNames(properties) : [];
        propertyNames.forEach((name) => {
            const innerProperties = object[name];
            const valueType = typeof innerProperties;
            if (!maybeFound && valueType === 'object') {
                maybeFound = findPropertyByName(innerProperties, propertyName);
            }
        });
    }
    return maybeFound;
}

/**
 * Converts an object to a Record<string, unknown>.
 * Useful for logging errors to AppInsight, and preserve all properties of an Error.
 * Supports custom Error which has public or private fields. Will ignore any functions on the Error object.
 * It does not support cycling references (A -> B -> A).
 * @param objectWithProperties an object containing properties
 * @param args.ignoreEquals ignore/omit any property that equals this (case insensitive)
 * @param args.ignoreIncludes ignore/omit any property that includes this (case insensitive)
 * @returns a record containing all properties of the object
 */
export function getAllProperties(
    objectWithProperties: Record<string, unknown> | object | undefined,
    args?: { ignoreEquals?: string[]; ignoreIncludes?: string[] }
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
        if (valueType === 'function' || isPropertyIgnored(name, args)) {
            //ignore
        } else if (!!value && typeof value === 'object') {
            rec[name] = getAllProperties(value, args);
        } else {
            rec[name] = value;
        }
    });
    return rec;
}

function isPropertyIgnored(name: string, args?: { ignoreEquals?: string[]; ignoreIncludes?: string[] }) {
    if (!args) {
        return false;
    }

    name = name.toLocaleLowerCase();

    if (args.ignoreIncludes && args.ignoreIncludes.some((item) => name.includes(item.toLocaleLowerCase()))) {
        return true;
    }

    if (args.ignoreEquals && args.ignoreEquals.some((item) => name === item.toLocaleLowerCase())) {
        return true;
    }
}
