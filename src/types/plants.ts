export interface Plant {
    instCode: string;
    description: string;
    sapPlantId: string;
    proCoSysPlantId: string;
}

export interface PlantsData {
    plants: Plant[];
    plantsHasError?: boolean;
}
