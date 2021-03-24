import { dispatch } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { AppRegistration, GlobalState } from '../types/state';
import { addOrOverwriteWithKey, removeWithKey } from '../utils/state';

export function registerApp<TKey extends string>(key: TKey, app: AppRegistration): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            apps: addOrOverwriteWithKey(s.registry.apps, key, app)
        }
    }));
}

export function unnRegisterApp<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            apps: removeWithKey(s.registry.apps, key)
        }
    }));
}
