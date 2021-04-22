import {
    AppDependencyGetter,
    AppMetaData,
    AppModuleData,
    AvailableDependencies,
    DefaultLoaderConfig,
    EchoModule,
    ModuleLoader
} from '../types';
import { createEmptyModule } from '../utils/emptyApp';
import { getDependencyResolver } from '../utils/getDependencyResolver';
import { includeBundle, includeDependency } from './dependency';

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
            return loadModule(meta, getDependencies, (deps) => includeDependency(meta, deps, config.crossOrigin));
        } else if (inBrowser && 'bundle' in meta && meta.bundle) {
            return loadModule(meta, getDependencies, (deps) => includeBundle(meta, deps, config.crossOrigin));
        }

        console.warn('Empty Module found!', name);
        return Promise.resolve(createEmptyModule(meta));
    };
}

async function loadModule(
    meta: AppMetaData,
    getDependencies: AppDependencyGetter,
    loader: (dependencies: AvailableDependencies) => Promise<AppModuleData>
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
