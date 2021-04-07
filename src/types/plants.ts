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
