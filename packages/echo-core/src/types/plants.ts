export interface Plant {
    instCode: string;
    hasTr2000: boolean;
    description: string;
    sapPlantId: string;
    proCoSysPlantId: string;
}

export interface PlantsData {
    plants: Plant[];
    plantsHasError?: boolean;
}

export interface EchoHubPlant {
    plantCode: string;
    installationCode: string;
    projectDescription: string;
    plantDirectory: string;
    operationArea: string;
    availableInEcho3D: boolean;
    sapId: number;
    ayelixSiteId?: number;
}
