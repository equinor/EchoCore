import { EchoModule, EchoModuleApiCreator } from '../types';
import { setupModule } from './setup';
import { checkFunction } from './utils';

/**
 * Creates module and returns all created modules
 *
 * @export
 * @param {EchoModuleApiCreator} createModuleApi
 * @param {EchoModule[]} modules
 * @return {*}  {Promise<EchoModule[]>}
 */
export async function createModules(
    createModuleApi: EchoModuleApiCreator,
    modules: EchoModule[]
): Promise<EchoModule[]> {
    const promises: Array<Promise<EchoModule>> = [];

    for (const module of modules) {
        promises.push(createModule(createModuleApi, module));
    }

    return await Promise.all(promises).then((loadedApps) => loadedApps);
}

/**
 * Installs a EchoModule if the provided EchoModuleApiCreator is valid,
 * by calling the modules setup function.
 *
 * @export
 * @param {EchoModuleApiCreator} createModuleApi
 * @param {EchoModule} module
 * @return {*}  {Promise<EchoModule>}
 */
export async function createModule(createModuleApi: EchoModuleApiCreator, module: EchoModule): Promise<EchoModule> {
    if (checkFunction(createModuleApi, 'Invalid `createAppApi` function. Skipping App installation.')) {
        await setupModule(module, createModuleApi);
    }
    return module;
}
