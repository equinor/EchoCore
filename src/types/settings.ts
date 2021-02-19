export interface Settings extends PlantSettings {
    hasAcceptedTerms: boolean;
    hasDoneOnboarding: boolean;
    showTextHighlighting: boolean;
}

export interface PlantSettings {
    instCode: string;
    sapPlantId: string;
    proCoSysPlantId: string;
    plantName: string;
}

export interface UsePlantSettings extends PlantSettings {
    setPlantSettings: (plantSettings: PlantSettings) => void;
}
