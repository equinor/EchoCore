/**
 * ErrorProperties provides a general purpose object
 * for extending the number error porperties available
 * @export
 * @interface ErrorProperties
 */
export interface ErrorProperties {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any; //support any properties in exception/error
}
