import { BaseError } from './BaseError';

export class NotAProperErrorObject extends BaseError {}

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
        // 'undefined' |
        // 'function'
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
        return new NotAProperErrorObject({
            message: message,
            exception: { argumentType: errorType }
        });
    }

    if (errorType === 'object') {
        const errorAsObject = error as object;
        const properties = { ...errorAsObject } as { [key: string]: unknown };

        const maybeName = (properties['name'] as string) ?? undefined;
        const maybeMessage = (properties['message'] as string) ?? undefined;
        const message = ((maybeName ?? '') + ' ' + (maybeMessage ?? '')).trim();

        return new NotAProperErrorObject({
            message: message.length > 0 ? message : 'unknown',
            exception: { ...properties, argumentType: errorType }
        });
    }

    return new NotAProperErrorObject({ message: 'unknown', exception: { argumentType: errorType } });
}
