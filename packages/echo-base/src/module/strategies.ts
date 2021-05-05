import { EchoModule, EchoModuleApiCreator, EchoModuleLoaded, LoadingModuleOptions, ModuleLoader } from '../types';
import { createModules } from './aggregate';
import { ModulesEvaluationError } from './errors';
import { loadModules } from './load';
import { createModuleLoader } from './loader';
import { filterExcludePrivateModulesInProduction, isProduction } from './utils';

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

        return createModules(
            createApi,
            filterExcludePrivateModulesInProduction([...oldModules, ...newModules], isProduction)
        );
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
    const loader: ModuleLoader = createModuleLoader(options.config, options.dependencies, options.getDependencies);
    try {
        const fetchedModules = await loadModules(loader, options.fetchModules);
        const allModules = await evaluateAllModules(options.createApi, fetchedModules, options.modules);
        return callback(undefined, allModules);
    } catch (error) {
        return callback(error, []);
    }
}
