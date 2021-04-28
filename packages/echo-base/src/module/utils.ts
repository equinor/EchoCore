import { EchoModule, ModuleMetaData } from '../types/module';

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
 * Helper function for Checking if function is present.
 *
 * @param {EchoModuleApiCreator} createModuleApi
 * @return {*}  {boolean}
 */
export function checkFunction(func: unknown, errorMessage: string): boolean {
    if (!isfunc(func)) {
        console.warn(errorMessage);
        return false;
    }

    return true;
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
 * @param {ModuleMetaData} meta
 * @return {*}  {SingleApp}
 */
export function createEmptyApp(meta: ModuleMetaData): EchoModule {
    return {
        ...meta,
        setup(): void {
            // Empty module
        }
    };
}
