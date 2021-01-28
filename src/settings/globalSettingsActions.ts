import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { Settings } from '../types/settings';
import { GlobalState, GlobalStateContext } from '../types/state';
import persistEchoSetting from './persistEchoSetting';
/**
 * Function Used for updating specific settings value in the global state.
 *
 * @export Function Echo Core.
 * @param {K} key is keyof Settings
 * @param {Settings[K]} data associated with the key
 * @param {GlobalStateContext} [context=getCoreContext()]
 */
export function updateSettingByKey<K extends keyof Settings>(
    key: K,
    data: Settings[K],
    context: GlobalStateContext = getCoreContext()
): void {
    const settings = { ...getSetting() };
    settings[key] = data;
    dispatch(context, (state: GlobalState) => {
        persistEchoSetting.persistSettingInLocalStorage(settings);
        const newState = { ...state, settings };
        return newState;
    });
}

/**
 * Function Used for updating one ore more items in the settings at the global state.
 * @export Function Echo Core.
 * @param {Settings} settings
 * @param {*} [context=getCoreContext()]  Optional parameter used for testing.
 */

export function setSetting(partialSettings: Partial<Settings>, context: GlobalStateContext = getCoreContext()): void {
    const settings = { ...getSetting(), ...partialSettings };
    dispatch(context, (state: GlobalState) => {
        persistEchoSetting.persistSettingInLocalStorage(settings);
        const newState = { ...state, settings };
        return newState;
    });
}
/**
 *
 * @export Function Echo Core.
 * @param {*} [context=getCoreContext()] Optional parameter used for testing.
 * @return {*}  {Settings}
 */
export function getSetting(context = getCoreContext()): Settings {
    return readState(context, (state: GlobalState) => state.settings);
}
