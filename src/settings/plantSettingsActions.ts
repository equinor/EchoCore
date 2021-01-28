import { readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { PlantSettings } from '../types/settings';
import { setSetting } from './globalSettingsActions';

/**
 * Used for setting/updating the plantSelected.
 *
 * @export Function from Echo Core.
 * @param {PlantSettings} plantSettings selected plant data object.
 */
export function setSelectedPlant(plantSettings: PlantSettings): void {
    setSetting(plantSettings);
}

/**
 * Used fro retrieving the selected PlantData.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
export function getSelectedPlant(): PlantSettings {
    const {
        instCode: selectedInstCode,
        sapPlantId: selectedSapPlantId,
        proCoSysPlantId: selectedProCoSysPlantId,
        plantName: selectedPlantName
    } = readState(getCoreContext(), (state) => {
        return state.settings;
    });

    const selectedPlant = { selectedInstCode, selectedSapPlantId, selectedProCoSysPlantId, selectedPlantName };
    return selectedPlant;
}
