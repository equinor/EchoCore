import { readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { PlantSettings } from '../types/settings';
import { setSetting } from './globalSettingsActions';

/**
 * Used for setting or updating the selected plant.
 *
 * @export Function from Echo Core.
 * @param {PlantSettings} plantSettings selected plant data object.
 */
export function setSelectedPlant(plantSettings: PlantSettings): void {
    setSetting(plantSettings);
}

/**
 * Used from retrieving the selected PlantData.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
export function getSelectedPlant(): PlantSettings {
    const { instCode, sapPlantId, proCoSysPlantId, plantName } = readState(getCoreContext(), (state) => {
        return state.settings;
    });

    const selectedPlant = { instCode, sapPlantId, proCoSysPlantId, plantName };
    return selectedPlant;
}
