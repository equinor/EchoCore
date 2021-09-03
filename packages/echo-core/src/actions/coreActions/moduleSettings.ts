import { getCoreContext } from '../../state/globalState';
import { unRegisterModuleSetting } from '../../types';
import { Dict } from '../../types/common';
import { ModuleSettings } from '../../types/registry';
import { GlobalState } from '../../types/state';
import { removeWithKey } from '../../utils/state';
import { verifyKey } from './extensions';
import { dispatch, readState } from './globalActions';

/**
 * Core action for registering settings for a module
 * These can be used to show settings outside the module,
 * combined with other settings for instance.
 * @export
 * @param {ModuleSettings} moduleSetting
 * @return {*}  {unRegisterModuleSetting} for removing the current module settings
 */
export function registerModuleSetting(moduleSetting: ModuleSettings): unRegisterModuleSetting {
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
    return (): void => {
        unRegisterModuleSetting(moduleSetting.key);
    };
}

/**
 * Core action for unRegistering settingsModule.
 * will come pre-configured when using the registerModuleSettings.
 *
 * @export
 * @param {string} key
 */
export function unRegisterModuleSetting(key: string): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({
        ...state,
        registry: {
            ...state.registry,
            moduleSettings: removeWithKey(state.registry.moduleSettings, key)
        }
    }));
}

/**
 * Core Action for reading the current state of moduleSettings.
 *
 * @export
 * @return {*}  {Readonly<Dict<ModuleSettings>>}
 */
export function readModuleSettings(): Readonly<Dict<ModuleSettings>> {
    return readState(getCoreContext(), (state) => {
        return state.registry.moduleSettings;
    });
}
