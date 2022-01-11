import { ErrorArgs } from '../types/error';
import { BaseError } from './BaseError';

export class ImproperErrorObject extends BaseError {
    constructor(args: ErrorArgs) {
        super({ ...args, name: 'ImproperErrorObject' });
    }
}

/**
 * Helper method: Useful with Try Catch(error), where error is of type unknown.
 * Returns same error if it's already an error (or if it extends error),
 * otherwise it converts it to type NotAProperErrorObject (with all properties preserved) which extends baseError
 * @param error The error to convert (if needed)
 * @returns Error or a an object which extends Error.
 */
export function toError(error: Error | BaseError | unknown): Error | BaseError {
    if (error instanceof BaseError || error instanceof Error) {
        return error;
    }

    const errorType = typeof error;
    if (
        errorType === 'string' ||
        errorType === 'number' ||
        errorType === 'boolean' ||
        errorType === 'bigint' ||
        errorType === 'symbol'
    ) {
        let message = 'unknown';
        switch (errorType) {
            case 'string':
                message = error as string;
                break;
            case 'number':
                message = (error as number).toString();
                break;
            case 'boolean':
                message = (error as boolean).toString();
                break;
            case 'bigint':
                message = (error as bigint).toString();
                break;
            case 'symbol':
                message = (error as symbol).toString();
                break;
            default:
                break;
        }
        return new ImproperErrorObject({
            message: message,
            innerError: { argumentType: errorType }
        });
    }

    if (errorType === 'object') {
        const errorAsObject = error as object;
        const properties = { ...errorAsObject } as { [key: string]: unknown };

        const maybeName = (properties['name'] as string) ?? '';
        const maybeMessage = (properties['message'] as string) ?? '';
        const message = `${maybeName} ${maybeMessage}`.trim();

        return new ImproperErrorObject({
            message: message.length > 0 ? message : 'unknown',
            innerError: { ...properties, argumentType: errorType }
        });
    }

    return new ImproperErrorObject({ message: 'unknown', innerError: { argumentType: errorType } });
}
