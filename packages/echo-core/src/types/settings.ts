import { ProcosysProject } from './procosysProjects';

export interface Settings {
    procosysProjectSettings: ProcosysProject;
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
