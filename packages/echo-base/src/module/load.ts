import { EchoModule, ModuleLoader, ModuleMetaData, ModuleRequester } from '../types';
import { ModulesMetaError } from './errors';
import { checkFunction } from './utils';
import { verifyModulesMeta } from './verify';

/**
 * Loader for fetching Metadata will always resolve with empty Array
 * if modules are noe present.
 *
 * @export
 * @param {ModuleRequester} fetchModules
 * @return {*}  {Promise<ModuleMetaData[]>}
 */
export async function loadMetaData(fetchModules?: ModuleRequester): Promise<ModuleMetaData[]> {
    if (
        fetchModules &&
        checkFunction(fetchModules, 'Could not get the Modules. Provide a valid `fetchModules` function.')
    ) {
        try {
            return verifyModulesMeta(await fetchModules());
        } catch (innerError) {
            throw new ModulesMetaError({ message: '[loadMetaData] failed', innerError });
        }
    }

    return Promise.resolve([]);
}

/**
 * Loading modules metadata with provided fetch method.
 * Loads all modules if meta data is instance of array.
 * Will trow ModulesMetaError on invalid modules meta-data is nor returned as an instance of Array.
 *
 * @export
 * @param {ModuleLoader} loader
 * @param {ModuleRequester} [fetchModules]
 * @return {*}  {Promise<Array<EchoModule>>}
 */
export async function loadModules(loader: ModuleLoader, fetchModules?: ModuleRequester): Promise<Array<EchoModule>> {
    const modules = await loadMetaData(fetchModules);
    if (modules instanceof Array) {
        return await Promise.all(modules.map(loader));
    } else {
        throw new ModulesMetaError({ message: 'Invalid modules meta-data, argument is not an Array' });
    }
}
