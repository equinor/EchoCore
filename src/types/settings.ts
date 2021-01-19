export interface Settings extends PlantSettings {
    hasAcceptedTerms: boolean;
    hasDoneOnboarding: boolean;
    settingsItems: SettingsItem[];
}

export interface PlantSettings {
    selectedInstCode: string;
    selectedSapPlantId: string;
    selectedProCoSysPlantId: string;
    selectedPlantName: string;
}

export interface SettingsItem {
    settingsKey: string;
    isDefault: boolean;
    syncOffline: boolean;
    enable: boolean;
}
