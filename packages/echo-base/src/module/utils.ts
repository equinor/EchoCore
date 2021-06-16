import { EchoModuleApiCreator, ModuleRequester } from '../types/creators';
import { EchoModule, ModuleMetaData } from '../types/module';

/**
 * This function is a cleanup function fro removing mainly script tags in the DOM
 * This should be used with caution.
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
export function checkFunction(func: EchoModuleApiCreator | ModuleRequester, errorMessage: string): boolean {
    if (!isfunc(func)) {
        console.warn(errorMessage);
        return false;
    }

    return true;
}

/**
 * Simple util function for checking if a function is a function.
 *
 * @export
 * @param {*} f
 * @return {*}  {f is Function}
 */
export function isfunc(f: unknown): f is Function {
    return typeof f === 'function';
}

/**
 * Creates an empty Module, this to prevent client application
 * crashing of a module no present files.
 *
 * @export
 * @param {ModuleMetaData} meta
 * @return {*}  {SingleApp}
 */
export function createEmptyModule(meta: ModuleMetaData): EchoModule {
    return {
        ...meta,
        setup(): void {
            // Empty module
        }
    };
}
/**
 * A private module is a a module hidden anf will not be a part production.
 * This is a simple way of enabling for testing a module in det development environment
 * For better result this check / filter should be handled by the backend.
 * For now the filter is present in frontend.
 *
 * @export
 * @param {EchoModule[]} modules
 * @param {() => boolean} [isProduction]
 * @return {*}  {EchoModule[]}
 */
export function filterExcludePrivateModulesInProduction(
    modules: EchoModule[],
    isProduction?: () => boolean
): EchoModule[] {
    if (isProduction && isProduction()) {
        return modules.filter((module) => module.private !== true);
    }
    return modules;
}

export function fireAndForget(asyncFunc: () => Promise<void>): void {
    asyncFunc();
}
