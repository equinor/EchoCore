/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    AppData,
    AppDependencyGetter,
    AppMetaData,
    AppModuleData,
    AvailableDependencies,
    DefaultLoaderConfig,
    EchoModule,
    ModuleLoader,
    ModuleRequester
} from '../types';
import { createEmptyModule } from '../utils/emptyApp';
import { getDependencyResolver } from '../utils/getDependencyResolver';
import { isfunc } from '../utils/isFunc';
import { includeBundle, includeDependency } from './dependency';
import { ModuleLoadingError } from './errors';

export function loadModule(meta: AppMetaData, loadModuleData: (meta: AppMetaData) => AppData): EchoModule {
    const module = loadModuleData(meta);
    return { ...meta, ...module };
}

function checkFetchFunction(fetchModules: ModuleRequester): boolean {
    if (!isfunc(fetchModules)) {
        console.error('Could not get the Modules. Provide a valid `fetchModules` function.');
        return false;
    }

    return true;
}

export function loadMetaData(fetchModules: ModuleRequester): Promise<AppMetaData[]> {
    if (checkFetchFunction(fetchModules)) {
        return fetchModules();
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

const inBrowser = typeof document !== 'undefined';

export function createModuleLoader(
    config?: DefaultLoaderConfig,
    dependencies?: AvailableDependencies,
    getDependencies?: AppDependencyGetter
): ModuleLoader {
    const getDeps = getDependencyResolver(dependencies, getDependencies);
    return moduleLoader(getDeps, config);
}

export function moduleLoader(getDependencies: AppDependencyGetter, config: DefaultLoaderConfig = {}) {
    return (meta: AppMetaData): Promise<EchoModule> => {
        if (inBrowser && 'requireRef' in meta && meta.requireRef) {
            return loadFrom(meta, getDependencies, (deps) => includeDependency(meta, deps, config.crossOrigin));
        } else if (inBrowser && 'bundle' in meta && meta.bundle) {
            return loadFrom(meta, getDependencies, (deps) => includeBundle(meta, deps, config.crossOrigin));
        }

        console.warn('Empty Module found!', name);
        return Promise.resolve(createEmptyModule(meta));
    };
}

function loadFrom(
    meta: AppMetaData,
    getDependencies: AppDependencyGetter,
    loader: (dependencies: AvailableDependencies) => Promise<AppModuleData>
): Promise<EchoModule> {
    const dependencies = {
        ...(getDependencies(meta) || {})
    };
    return loader(dependencies).then((app: any) => ({
        ...app,
        ...meta
    }));
}
