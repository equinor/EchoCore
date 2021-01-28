import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { Settings } from '../types/settings';
import { GlobalState } from '../types/state';
import persistEchoSetting from './persistEchoSetting';
/**
 * Function used for updating specific settings value in the global state.
 *
 * @export Function Echo Core.
 * @param {K} key is keyof Settings
 * @param {Settings[K]} data associated with the key
 */
export function updateSettingByKey<K extends keyof Settings>(key: K, data: Settings[K]): void {
    const settings = { ...getSettings() };
    settings[key] = data;
    dispatch(getCoreContext(), (state: GlobalState) => {
        persistEchoSetting.persistSettingsInLocalStorage(settings);
        const newState = { ...state, settings };
        return newState;
    });
}

/**
 * Function used for updating one ore more items in the settings at the global state.
 * @export Function Echo Core.
 * @param {Settings} settings
 */
export function setSetting(partialSettings: Partial<Settings>): void {
    const settings = { ...getSettings(), ...partialSettings };
    dispatch(getCoreContext(), (state: GlobalState) => {
        persistEchoSetting.persistSettingsInLocalStorage(settings);
        const newState = { ...state, settings };
        return newState;
    });
}
/**
 *
 * @export Function Echo Core.
 * @return {*}  {Settings}
 */
export function getSettings(): Settings {
    return readState(getCoreContext(), (state: GlobalState) => state.settings);
}

/**
 *
 *
 * @export
 * @template K
 * @param {K} key
 * @return {*}  {Readonly<Settings[K]>}
 */
export function getSettingsByKey<K extends keyof Settings>(key: K): Readonly<Settings[K]> {
    return getSettings()[key];
}
