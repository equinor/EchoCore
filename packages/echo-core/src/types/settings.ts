import { ProcosysProjectCode } from './procosysProjects';

export interface Settings {
    procosysProjectSettings: ProcosysProjectCode;
    showTextHighlighting: boolean;
    plantSettings: PlantSettings;
    showMeasuringPoints: boolean;
}

export interface PlantSettings {
    instCode: string;
    hasTr2000: boolean;
    sapPlantId: string;
    proCoSysPlantId: string;
    plantName: string;
}
