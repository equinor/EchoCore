import { readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { PlantSettings } from '../types/settings';
import { setSetting } from './globalSettingsActions';
import persistEchoSetting from './persistEchoSetting';

/**
 * Used for setting or updating the selected plant.
 *
 * @export Function from Echo Core.
 * @param {PlantSettings} plantSettings selected plant data object.
 */
export function setSelectedPlant(plantSettings: PlantSettings): void {
    setSetting({ plantSettings });
    persistEchoSetting.persistSettingsInLocalStorage({ plantSettings });
}

/**
 * Used from retrieving the selected PlantData.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
export function getSelectedPlant(): PlantSettings {
    const { instCode, sapPlantId, proCoSysPlantId, plantName } = readState(getCoreContext(), (state) => {
        return state.settings.plantSettings;
    });

    return { instCode, sapPlantId, proCoSysPlantId, plantName };
}

/**
 * Used from retrieving the selected instCode.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
export function getInstCode(): string {
    return getSelectedPlant().instCode;
}
/**
 * Used from retrieving the selected sapPlantId.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
export function getSapPlantId(): string {
    return getSelectedPlant().sapPlantId;
}
/**
 * Used from retrieving the selected proCoSysPlantId.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
export function getProCoSysPlantId(): string {
    return getSelectedPlant().proCoSysPlantId;
}
