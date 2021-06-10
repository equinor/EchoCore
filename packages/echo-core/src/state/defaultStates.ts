import { ActivePanel, GlobalState, LegendOptions } from '../types';
import { PlantsData } from '../types/plants';
import { ProcosysProject, ProcosysProjectsData } from '../types/procosysProjects';
import { PlantSettings, Settings } from '../types/settings';

export const legendOptions: LegendOptions = {
    isActive: true,
    selectedLegendType: 'Stid'
};

const plantSettings: PlantSettings = {
    instCode: '',
    hasTr2000: false,
    sapPlantId: '',
    proCoSysPlantId: '',
    plantName: ''
};

const procosysProjectSettings: ProcosysProject = {
    projectCode: '',
    stidDeliveryCode: 0,
    description: '',
    isRevProject: '',
    filter: {
        value: '',
        text: ''
    }
};

export const settings: Settings = {
    showTextHighlighting: true,
    procosysProjectSettings,
    plantSettings
};

export const plantsData: PlantsData = {
    plants: []
};

export const procosysProjectsData: ProcosysProjectsData = {
    procosysProjects: []
};

export const components = {
    ErrorInfo: true,
    LoadingIndicator: true,
    NoAccess: true,
    Router: true,
    Layouts: {
        default: true,
        mobile: true,
        home: true
    }
};

export const defaultGlobalState: GlobalState = {
    app: {
        error: undefined,
        loading: typeof window !== 'undefined',
        layout: 'desktop'
    },
    modules: [],
    panels: [],
    ui: {},
    registry: {
        panels: {},
        routes: {},
        appLinks: {}
    },
    activePanel: ActivePanel.None,
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    settings,
    plantsData,
    procosysProjectsData,
    legendOptions
};
