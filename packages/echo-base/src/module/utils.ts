import { AppMetaData, SingleModule, SingleModuleMetadata } from '../types/module';

/**
 *
 *
 * @export
 * @param {string} id
 */
export function removeElementById(id: string): void {
    document.getElementById(id)?.remove();
}
/**
 *
 *
 * @export
 * @param {*} f
 * @return {*}  {f is Function}
 */
export function isfunc(f: unknown): f is Function {
    return typeof f === 'function';
}

/**
 *
 *
 * @export
 * @param {AppMetaData} meta
 * @return {*}  {SingleApp}
 */
export function createEmptyApp(meta: SingleModuleMetadata): SingleModule {
    return {
        ...meta,
        setup(): void {
            // Empty module
        }
    };
}
