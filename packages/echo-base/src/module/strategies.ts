import { AppApiCreator, AppModuleLoaded, EchoModule, LoadingModuleOptions, ModuleLoader } from '../types';
import { createModules } from './aggregate';
import { ModulesEvaluationError } from './errors';
import { createModuleLoader, loadModules } from './loader';

async function evaluateAllModules(
    createApi: AppApiCreator,
    oldModules: EchoModule[],
    newModules: EchoModule[]
): Promise<EchoModule[]> {
    try {
        for (const oldModule of oldModules) {
            const [newModule] = newModules.filter((m) => m.name === oldModule.name);

            if (newModule) {
                newModules.splice(newModules.indexOf(newModule), 1);
            }
        }
        return createModules(createApi, [...oldModules, ...newModules]);
    } catch (error) {
        throw new ModulesEvaluationError(error);
    }
}

export async function standardStrategy(options: LoadingModuleOptions, callback: AppModuleLoaded): Promise<void> {
    const { createApi, fetchModules, modules } = options;
    const loader: ModuleLoader = createModuleLoader({});
    try {
        const fetchedModules = await loadModules(fetchModules, loader);
        const allModules = await evaluateAllModules(createApi, modules, fetchedModules);
        return callback(undefined, allModules);
    } catch (error) {
        return callback(error, []);
    }
}
