import { BaseError } from './BaseError';

export class NotAProperErrorObject extends BaseError {}

/**
 * Try Catch(error) => error is unknown.
 * Returns same error if it's already an error or if it extends error.
 * Otherwise it converts it to NotAProperErrorObject (with all properties) which extends baseError
 * @param error The error to convert to error if needed
 * @returns Error or a an object which extends Error.
 */
export function toError(error: Error | BaseError | unknown): Error | BaseError {
    if (error instanceof BaseError || error instanceof Error) {
        return error;
    }

    const errorArgumentType = typeof error;
    if (
        errorArgumentType === 'string' ||
        errorArgumentType === 'number' ||
        errorArgumentType === 'boolean' ||
        errorArgumentType === 'bigint' ||
        errorArgumentType === 'symbol'
        // 'undefined' |
        // 'function'
    ) {
        let message = 'unknown';
        switch (errorArgumentType) {
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
            exception: { argumentType: errorArgumentType }
        });
    }

    if (errorArgumentType === 'object') {
        const errorAsObject = error as object;
        const props = { ...errorAsObject } as { [key: string]: unknown };

        const maybeName = (props['name'] as string) ?? undefined;
        const maybeMessage = (props['message'] as string) ?? undefined;
        const message = ((maybeName ?? '') + ' ' + (maybeMessage ?? '')).trim();

        return new NotAProperErrorObject({
            message: message.length > 0 ? message : 'unknown',
            exception: { ...props, argumentType: errorArgumentType }
        });
    }

    return new NotAProperErrorObject({ message: 'unknown', exception: { argumentType: errorArgumentType } });
}
