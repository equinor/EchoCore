import { AppApiCreator, AppData, AppMetadata, AppModule } from '../types/module';
import { isfunc } from '../utils/isFunc';
import { createApps } from './aggregate';

export function loadModule(meta: AppMetadata, loadModuleData: (meta: AppMetadata) => AppData): AppModule {
    const module = loadModuleData(meta);
    return { ...meta, ...module };
}

async function evaluateAllAsync(
    createApi: AppApiCreator,
    oldModules: AppModule[],
    newModules: AppModule[]
): Promise<AppModule[]> {
    try {
        for (const oldModule of oldModules) {
            const [newModule] = newModules.filter((m) => m.name === oldModule.name);

            if (newModule) {
                newModules.splice(newModules.indexOf(newModule), 1);
            }
        }
        return createApps(createApi, [...oldModules, ...newModules]);
    } catch (error) {
        throw new Error(error);
    }
}

export interface AppModuleLoaded {
    (error: Error | undefined, modules: Array<AppModule>): void;
}

export interface AppModulesLoading {
    (error: Error | undefined, pilets: Array<AppModule>, loaded: boolean): void;
}

export interface ModuleLoader {
    (): Array<AppModule>;
}

export async function loadingStrategy(
    modules: AppModule[],
    createApi: AppApiCreator,
    callback: AppModuleLoaded
): Promise<void> {
    try {
        const fetchedModules = [];
        const allModules = await evaluateAllAsync(createApi, modules, fetchedModules);
        return callback(undefined, allModules);
    } catch (error) {
        return callback(error, []);
    }
}

interface StartLoadingModules {
    connect(notifier: AppModulesLoading): void;
    disconnect(notifier: AppModulesLoading): void;
}

export function startLoadingModules(moduleLoader: ModuleLoader, createApi: AppApiCreator): StartLoadingModules {
    const state = {
        loaded: false,
        modules: [],
        error: undefined
    };

    const notifiers: AppModulesLoading[] = [];
    const call = (notifier: AppModulesLoading): void => notifier(state.error, state.modules, state.loaded);
    const notify = (): void => notifiers.forEach(call);
    const setAppModules = (error: Error, modules: Array<AppModule>): void => {
        state.error = error;
        state.modules = modules;
        notify();
    };

    const setLoaded = (): void => {
        state.loaded = true;
        notify();
    };
    const modules = moduleLoader();
    loadingStrategy(modules, createApi, setAppModules).then(setLoaded, setLoaded);
    return {
        connect(notifier: AppModulesLoading): void {
            if (isfunc(notifier)) {
                notifiers.push(notifier);
                call(notifier);
            }
        },
        disconnect(notifier: AppModulesLoading): void {
            const index = notifiers.indexOf(notifier);
            index !== -1 && notifiers.splice(index, 1);
        }
    };
}
