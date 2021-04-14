export interface Settings {
    showTextHighlighting: boolean;
    plantSettings: PlantSettings;
}

export interface PlantSettings {
    instCode: string;
    sapPlantId: string;
    proCoSysPlantId: string;
    plantName: string;
}
