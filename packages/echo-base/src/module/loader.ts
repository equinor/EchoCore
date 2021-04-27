import {
    AppDependencyGetter,
    AvailableDependencies,
    DefaultLoaderConfig,
    EchoModule,
    ModuleData,
    ModuleLoader,
    ModuleMetaData
} from '../types';
import { createEmptyModule } from '../utils/emptyApp';
import { getDependencyResolver } from '../utils/getDependencyResolver';
import { includeDependency } from './dependency';

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
    return (meta: ModuleMetaData): Promise<EchoModule> => {
        if (inBrowser && 'requireRef' in meta && meta.requireRef) {
            return loadModule(meta, getDependencies, (deps) => includeDependency(meta, deps, config.crossOrigin));
        }

        console.warn('Empty Module found!', meta.name);
        return Promise.resolve(createEmptyModule(meta));
    };
}

async function loadModule(
    meta: ModuleMetaData,
    getDependencies: AppDependencyGetter,
    loader: (dependencies: AvailableDependencies) => Promise<ModuleData>
): Promise<EchoModule> {
    const dependencies = {
        ...(getDependencies(meta) || {})
    };
    const app = await loader(dependencies);
    return {
        ...app,
        ...meta
    };
}
