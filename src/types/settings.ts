export interface Settings extends PlantSettings {
    hasAcceptedTerms: boolean;
    hasDoneOnboarding: boolean;
    isTextHighlighting: boolean;
    offlineSettings: OfflineSetting[];
}

export interface PlantSettings {
    instCode: string;
    sapPlantId: string;
    proCoSysPlantId: string;
    plantName: string;
}

export interface OfflineSetting {
    settingsKey: string;
    isDefault: boolean;
    syncOffline: boolean;
    enable: boolean;
}
