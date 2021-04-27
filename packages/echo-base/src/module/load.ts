import { EchoModule, ModuleLoader, ModuleMetaData, ModuleRequester } from '../types';
import { ModuleLoadingError } from './errors';
import { isfunc } from './utils';

function checkFetchFunction(fetchModules: ModuleRequester): boolean {
    if (!isfunc(fetchModules)) {
        console.error('Could not get the Modules. Provide a valid `fetchModules` function.');
        return false;
    }

    return true;
}

export async function loadMetaData(fetchModules: ModuleRequester): Promise<ModuleMetaData[]> {
    if (checkFetchFunction(fetchModules)) {
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
