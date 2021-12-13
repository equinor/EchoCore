import { EchoModule, EchoModuleApiCreator, EchoModuleLoaded, LoadingModuleOptions, ModuleLoader } from '../types';
import { createModules } from './aggregate';
import { ModulesEvaluationError } from './errors';
import { loadModules } from './load';
import { createModuleLoader } from './loader';
import { filterExcludePrivateModulesInProduction } from './utils';

function isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
}

/**
 * Evaluates modules and filters and compeers oldModules to newModules,
 * By setting the private flag in the echoModuleManifest to true the module will be removed for the production environment.
 * This is meant as feature flag when a module is under development.
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
        throw new ModulesEvaluationError({ message: '[strategies.evaluateAllModules] failed', exception: error });
    }
}

/**
 * Loading strategy Fetching modules from api or MocApi
 * Then evaluating and installing modules.
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
