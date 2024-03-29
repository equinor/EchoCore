/* eslint-disable @typescript-eslint/no-explicit-any */
import { AvailableDependencies, ModuleData, ModuleMetaData } from '../types';

declare global {
    interface HTMLScriptElement {
        module?: ModuleData;
    }
}

/**
 * Returns the module dependency if present in the AvailableDependencies
 * This function wil be added to window object so each echo module
 * can use it to get its dependencies
 *
 * @param {string} name
 * @param {AvailableDependencies} dependencies
 * @return {*}  {*}
 */
function getDependency(name: string, dependencies: AvailableDependencies): unknown {
    const dependency = dependencies[name];
    if (!dependency) {
        const error = new Error(`Cannot find module '${name}'`);
        (error as any).code = 'MODULE_NOT_FOUND';
        throw error;
    }
    return dependency;
}

/**
 * Verifies if the module is a correct EchoModule with a exported setup function.
 * Will provide a empty module if verification fails to prevent system crash.
 *
 * @param {string} name
 * @param {ModuleData} [module]
 * @return {*}  {ModuleData}
 */
function verifyModuleHasSetup(name: string, module?: ModuleData): ModuleData {
    if (!module) {
        console.error('Invalid module found.', name);
    } else if (typeof module.setup !== 'function') {
        console.warn('Setup function is missing.', name);
    } else {
        return module;
    }
    return {
        setup(): void {
            //setup code
        }
    };
}
/**
 * Incudes a script tag in the DOM,
 * and extracts the setup function.
 *
 * @export
 * @param {string} name
 * @param {string} fileUri
 * @param {string} depName
 * @param {AvailableDependencies} dependencies
 * @param {string} [crossOrigin]
 * @param {string} [integrity]
 * @return {*}  {(Promise<ModuleData | undefined>)}
 */
export async function appendScriptTagToDom(
    name: string,
    fileUri: string,
    depName: string,
    dependencies: AvailableDependencies,
    crossOrigin?: string,
    integrity?: string
): Promise<ModuleData | undefined> {
    return new Promise<ModuleData | undefined>((resolve, reject) => {
        const script = document.createElement('script');
        script.async = true;
        script.src = fileUri;
        script.id = name;

        if (integrity) {
            script.crossOrigin = crossOrigin || 'anonymous';
            script.integrity = integrity;
        } else if (crossOrigin) {
            script.crossOrigin = crossOrigin;
        }

        window[depName] = getLocalRequire(dependencies);

        script.onload = (): void => resolve(verifyAppWithModule(name, script.module));
        script.onerror = (): void => reject(`Could not load module ${name}`);

        document.head.appendChild(script);
    });
}

/**
 * async wrapper of check app resolving the app ModuleData
 *
 * @export
 * @param {string} name
 * @param {(ModuleData | Promise<ModuleData>)} [module]
 * @return {*}  {Promise<ModuleData>}
 */
export async function verifyAppWithModule(
    name: string,
    module?: ModuleData | Promise<ModuleData>
): Promise<ModuleData> {
    const resolvedModule = await Promise.resolve(module);
    return verifyModuleHasSetup(name, resolvedModule);
}
/**
 * Function added to window object for retrieving AvailableDependencies
 *
 * @export
 * @param {AvailableDependencies} [dependencies={}]
 * @return {*}
 */
export function getLocalRequire(dependencies: AvailableDependencies = {}) {
    return (moduleName: string): unknown => getDependency(moduleName, dependencies);
}
/**
 * Will include the current module. And provide the module all awaitable dependencies
 *
 * @export
 * @param {ModuleMetaData} { name, fileUri: link, requireRef, integrity }
 * @param {AvailableDependencies} [dependencies]
 * @param {string} [crossOrigin]
 * @return {*}  {Promise<ModuleData>}
 */
export async function includeModuleWithDependencies(
    { name, fileUri: link, requireRef, integrity }: ModuleMetaData,
    dependencies?: AvailableDependencies,
    crossOrigin?: string
): Promise<ModuleData> {
    return appendScriptTagToDom(name, link, requireRef, dependencies, crossOrigin, integrity);
}
