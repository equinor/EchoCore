import { EchoModulesLoading, LoadingModuleOptions } from '../types';
import { EchoModule } from '../types/module';
import { standardStrategy } from './strategies';
import { isfunc } from './utils';

interface StartLoadingModules {
    connect(notifier: EchoModulesLoading): void;
    disconnect(notifier: EchoModulesLoading): void;
}
/**
 * Used to start loading modules, the modules can be provided, or a fetch call can be defined to
 * retrieving the moduleMetaData that in turn will load the js files, and initialize the all modules.
 * Module data will be stored in the globals store trough the notifier provided trough the connect function.
 *
 * This function is used in Echo Framework in the Mediator Component.
 *
 * @export
 * @param {LoadingModuleOptions} options
 * @return {*}  {StartLoadingModules}
 */
export function startLoadingModules(options: LoadingModuleOptions): StartLoadingModules {
    const state = {
        loaded: false,
        modules: [],
        error: undefined
    };

    const notifiers: EchoModulesLoading[] = [];
    const call = (notifier: EchoModulesLoading): void => notifier(state.error, state.modules, state.loaded);
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
        connect(notifier: EchoModulesLoading): void {
            if (isfunc(notifier)) {
                notifiers.push(notifier);
                call(notifier);
            }
        },
        disconnect(notifier: EchoModulesLoading): void {
            const index = notifiers.indexOf(notifier);
            index !== -1 && notifiers.splice(index, 1);
        }
    };
}
