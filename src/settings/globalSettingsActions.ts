import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { Settings } from '../types/settings';
import { GlobalState, GlobalStateContext } from '../types/state';
import persistEchoSetting from './persistEchoSetting';

/**
 * Function Used for updating the settings in the global state.
 * @export
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
 * @export
 * @param {*} [context=getCoreContext()] Optional parameter used for testing.
 * @return {*}  {Settings}
 */
export function getSetting(context = getCoreContext()): Settings {
    return readState(context, (state: GlobalState) => state.settings);
}
