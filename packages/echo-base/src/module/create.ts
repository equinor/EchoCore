import { AppModulesLoading, LoadingModuleOptions } from '../types';
import { EchoModule } from '../types/module';
import { isfunc } from '../utils/isFunc';
import { standardStrategy } from './strategies';

interface StartLoadingModules {
    connect(notifier: AppModulesLoading): void;
    disconnect(notifier: AppModulesLoading): void;
}

export function startLoadingModules(options: LoadingModuleOptions): StartLoadingModules {
    const state = {
        loaded: false,
        modules: [],
        error: undefined
    };

    const notifiers: AppModulesLoading[] = [];
    const call = (notifier: AppModulesLoading): void => notifier(state.error, state.modules, state.loaded);
    const notify = (): void => notifiers.forEach(call);
    const setAppModules = (error: Error, modules: Array<EchoModule>): void => {
        state.error = error;
        state.modules = modules;
        notify();
    };

    const setLoaded = (): void => {
        state.loaded = true;
        notify();
    };
    standardStrategy(options, setAppModules).then(setLoaded, setLoaded);
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
