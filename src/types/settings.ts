export interface Settings extends PlantSettings {
    hasAcceptedTerms: boolean;
    hasDoneOnboarding: boolean;
    isTextHighlighting: boolean;
    offlineSettings: OfflineSetting[];
}

export interface PlantSettings {
    selectedInstCode: string;
    selectedSapPlantId: string;
    selectedProCoSysPlantId: string;
    selectedPlantName: string;
}

export interface OfflineSetting {
    settingsKey: string;
    isDefault: boolean;
    syncOffline: boolean;
    enable: boolean;
}
