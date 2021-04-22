import { dispatch } from '../actions';
import { getCoreContext } from '../state/globalState';
import { AppModule } from '../types/modules';
import { GlobalState } from '../types/state';
import { addOrOverwrite, removeModuleByKey } from '../utils/module';

export function registerModules(module: AppModule): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        modules: addOrOverwrite(s.modules, module)
    }));
}

export function unnRegisterModules<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        modules: removeModuleByKey(s.modules, key)
    }));
}
