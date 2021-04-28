import { EchoModule, ModuleLoader, ModuleMetaData, ModuleRequester } from '../types';
import { ModuleLoadingError } from './errors';
import { checkFunction } from './utils';

export async function loadMetaData(fetchModules: ModuleRequester): Promise<ModuleMetaData[]> {
    if (checkFunction(fetchModules, 'Could not get the Modules. Provide a valid `fetchModules` function.')) {
        return await fetchModules();
    }

    return Promise.resolve([]);
}

export async function loadModules(fetchModules: ModuleRequester, loader: ModuleLoader): Promise<Array<EchoModule>> {
    const modules = await loadMetaData(fetchModules);
    if (modules instanceof Array) {
        return await Promise.all(modules.map(loader));
    } else {
        throw new ModuleLoadingError({ message: 'Invalid modules' });
    }
}
