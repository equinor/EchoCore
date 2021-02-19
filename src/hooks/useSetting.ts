import { useAtom } from '@dbeining/react-atom';
import { useCallback } from 'react';
import { setSelectedPlant } from '../settings/plantSettingsActions';
import { getCoreState } from '../state/globalState';
import { Settings, UsePlantSettings } from '../types/settings';

/**
 * Internal Echo Core hook function for getting the settings from echo core state.
 * @return {*}  {Settings}
 */
function useSettings(): Settings {
    const { settings } = useAtom(getCoreState());
    return settings;
}

/**
 * Echo Core hook function for getting the plant settings from echo core state.
 * and function updating the plantSettings.
 * @export Hook fom Echo Core
 * @return {*}  {UsePlantSettings}
 */
export function usePlantSettings(): UsePlantSettings {
    const { instCode, sapPlantId, plantName, proCoSysPlantId } = useSettings();
    const setPlantSettings = useCallback(setSelectedPlant, []);
    return {
        instCode,
        sapPlantId,
        plantName,
        proCoSysPlantId,
        setPlantSettings
    };
}
/**
 * Echo Core hook function for getting the plant stid instCode.
 * @export Hook form Echo Core
 * @return {*}  instCode
 */
export function useInstCode(): string {
    const { instCode } = useSettings();
    return instCode;
}

/**
 * Echo Core hook function for getting the plant sap PlantId.
 * @export Hook form Echo Core
 * @return {*}  sapPlantId
 */
export function useSapPlantIdInstCode(): string {
    const { sapPlantId } = useSettings();
    return sapPlantId;
}

/**
 * Echo Core hook function for getting the plant proCoSysPlantId.
 * @export Hook form Echo Core
 * @return {*}  {string}
 */
export function useProCoSysPlantId(): string {
    const { proCoSysPlantId } = useSettings();
    return proCoSysPlantId;
}
