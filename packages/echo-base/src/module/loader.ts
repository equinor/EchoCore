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

/**
 * Create a module loader with the provided dependencies.
 *
 * @export
 * @param {DefaultLoaderConfig} [config]
 * @param {AvailableDependencies} [dependencies]
 * @param {AppDependencyGetter} [getDependencies]
 * @return {*}  {ModuleLoader}
 */
export function createModuleLoader(
    config?: DefaultLoaderConfig,
    dependencies?: AvailableDependencies,
    getDependencies?: AppDependencyGetter
): ModuleLoader {
    const getDeps = getDependencyResolver(dependencies, getDependencies);
    return getModuleLoader(getDeps, config);
}

/**
 * Loader for loading modules, with dependencies.
 * Will return an empty module, for avoiding crashes.
 *
 * @export
 * @param {AppDependencyGetter} getDependencies
 * @param {DefaultLoaderConfig} [config={}]
 * @return {*}  {ModuleLoader}
 */
export function getModuleLoader(getDependencies: AppDependencyGetter, config: DefaultLoaderConfig = {}): ModuleLoader {
    return (meta: ModuleMetaData): Promise<EchoModule> => {
        if (inBrowser && 'requireRef' in meta && meta.requireRef) {
            return loadModule(meta, getDependencies, (deps) => includeDependency(meta, deps, config.crossOrigin));
        }

        console.warn('Empty Module found!', meta.name);
        return Promise.resolve(createEmptyModule(meta));
    };
}

/**
 * Loading the module and combining the javascript module with the modules Metadata.
 *
 * @param {ModuleMetaData} meta
 * @param {AppDependencyGetter} getDependencies
 * @param {(dependencies: AvailableDependencies) => Promise<ModuleData>} loader
 * @return {*}  {Promise<EchoModule>}
 */
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
