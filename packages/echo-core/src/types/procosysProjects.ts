export interface ProcosysProjectsData {
    procosysProjects: ProcosysProject[];
    procosysProjectsHasError?: boolean;
}

export interface ProcosysProject {
    projectCode: string;
    stidDeliveryCode: number;
    description: string;
    isRevProject: string;
    filter: Filter;
}

interface Filter {
    value: string;
    text: string;
}
