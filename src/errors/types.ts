/**
 * ErrorProperties provides a general purpose object
 * for extending the number error porperties available
 * @export
 * @interface ErrorProperties
 */
export interface ErrorProperties {
    errors?: string | Record<string, unknown>;
    [key: string]: unknown; //support any properties in exception/error
}
