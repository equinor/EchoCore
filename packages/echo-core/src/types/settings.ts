import { ProcosysProjectCode } from './procosysProjects';

export interface Settings {
    selectedProcosysProject: ProcosysProjectCode;
    showTextHighlighting: boolean;
    plantSettings: PlantSettings;
}

export interface PlantSettings {
    instCode: string;
    hasTr2000: boolean;
    sapPlantId: string;
    proCoSysPlantId: string;
    plantName: string;
}
