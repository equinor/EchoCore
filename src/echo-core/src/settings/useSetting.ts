import { useGlobalState } from '../state/useGlobalState';
import { PlantSettings, Settings } from '../types/settings';

/**
 * Internal Echo Core hook function for getting the settings from echo core state.
 * @return {*}  {Settings}
 */
function useSettings(): Settings {
    const { settings } = useGlobalState();
    return settings;
}

/**
 * Echo Core hook function for getting the plant settings from echo core state.
 * and function updating the plantSettings.
 * @export Hook fom Echo Core
 * @return {*}  {UsePlantSettings}
 */
export default function usePlantSettings(): PlantSettings {
    const { instCode, sapPlantId, plantName, proCoSysPlantId } = useSettings().plantSettings;
    return {
        instCode,
        sapPlantId,
        plantName,
        proCoSysPlantId
    };
}
/**
 * Echo Core hook function for getting the plant stid instCode.
 * @export Hook form Echo Core
 * @return {*}  instCode
 */
export function useInstCode(): string {
    const { instCode } = usePlantSettings();
    return instCode;
}

/**
 * Echo Core hook function for getting the plant sap PlantId.
 * @export Hook form Echo Core
 * @return {*}  sapPlantId
 */
export function useSapPlantIdInstCode(): string {
    const { sapPlantId } = usePlantSettings();
    return sapPlantId;
}

/**
 * Echo Core hook function for getting the plant proCoSysPlantId.
 * @export Hook form Echo Core
 * @return {*}  {string}
 */
export function useProCoSysPlantId(): string {
    const { proCoSysPlantId } = usePlantSettings();
    return proCoSysPlantId;
}
