import { getCoreContext } from '../../state/globalState';
import { Dict } from '../../types/common';
import { ModuleSettings } from '../../types/registry';
import { GlobalState } from '../../types/state';
import { verifyKey } from './extensions';
import { dispatch, readState } from './globalActions';

/**
 * Core action for registering settings for a module
 * These can be used to show settings outside the module,
 * combined with other settings for instance.
 * @export
 * @param moduleSetting
 */
export function registerModuleSetting(moduleSetting: ModuleSettings): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({
        ...state,
        registry: {
            ...state.registry,
            moduleSettings: {
                ...state.registry.moduleSettings,
                ...verifyKey(state.registry.moduleSettings, moduleSetting)
            }
        }
    }));
}

export function readModuleSettings(): Readonly<Dict<ModuleSettings>> {
    return readState(getCoreContext(), (state) => {
        return state.registry.moduleSettings;
    });
}
