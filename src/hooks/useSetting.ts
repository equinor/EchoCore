import { useAtom } from '@dbeining/react-atom';
import { useCallback } from 'react';
import { getSelectedPlant, setSelectedPlant } from '../settings/plantSettingsActions';
import { getCoreState } from '../state/globalState';
import { Settings, UsePlantSettings } from '../types/settings';

/**
 * Echo Core hook function for getting the settings form echo core state.
 *
 * @export Function fom Echo Core
 * @return {*}  {Settings}
 */
export default function useSettings(): Settings {
    const { settings } = useAtom(getCoreState());
    return settings;
}

/**
 * Echo Core hook function for getting the plant settings form echo core state.
 * @export
 * @return {*}  {PlantSettings}
 */
export function usePlantSettings(): UsePlantSettings {
    const { instCode, sapPlantId, plantName, proCoSysPlantId } = useSettings();

    const getPlantSettings = useCallback(getSelectedPlant, []);
    const setPlantSettings = useCallback(setSelectedPlant, []);
    return {
        instCode,
        sapPlantId,
        plantName,
        proCoSysPlantId,
        getPlantSettings,
        setPlantSettings
    };
}
