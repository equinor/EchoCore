import { EchoModule, EchoModuleApiCreator, EchoModuleLoaded, LoadingModuleOptions, ModuleLoader } from '../types';
import { createModules } from './aggregate';
import { ModulesEvaluationError } from './errors';
import { loadModules } from './load';
import { createModuleLoader } from './loader';
import { filterModulesByEnvironment, isProduction } from './utils';

/**
 *Evaluates modules and filters and compeers oldModules to newModules,
 *
 * @param {EchoModuleApiCreator} createApi
 * @param {EchoModule[]} newModules
 * @param {EchoModule[]} [oldModules=[]]
 * @return {*}  {Promise<EchoModule[]>}
 */
async function evaluateAllModules(
    createApi: EchoModuleApiCreator,
    newModules: EchoModule[],
    oldModules: EchoModule[] = []
): Promise<EchoModule[]> {
    try {
        for (const oldModule of oldModules) {
            const [newModule] = newModules.filter((m) => m.name === oldModule.name);

            if (newModule) {
                newModules.splice(newModules.indexOf(newModule), 1);
            }
        }

        return createModules(createApi, filterModulesByEnvironment([...oldModules, ...newModules], isProduction));
    } catch (error) {
        throw new ModulesEvaluationError(error);
    }
}

/**
 * Loading strategy Fetching modules from api or MocApi en then
 * evaluating and installing modules.
 *
 * @export
 * @param {LoadingModuleOptions} options
 * @param {EchoModuleLoaded} callback
 * @return {*}  {Promise<void>}
 */
export async function standardStrategy(options: LoadingModuleOptions, callback: EchoModuleLoaded): Promise<void> {
    const { createApi, fetchModules, modules, config, dependencies, getDependencies } = options;
    const loader: ModuleLoader = createModuleLoader(config, dependencies, getDependencies);
    try {
        const fetchedModules = await loadModules(loader, fetchModules);
        const allModules = await evaluateAllModules(createApi, fetchedModules, modules);
        return callback(undefined, allModules);
    } catch (error) {
        return callback(error, []);
    }
}
