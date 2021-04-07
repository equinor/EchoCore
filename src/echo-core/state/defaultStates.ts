import { ActivePanel, GlobalState, LegendOptions } from '../types';
import { PlantsData } from '../types/plants';
import { PlantSettings, Settings } from '../types/settings';

export const legendOptions: LegendOptions = {
    isActive: true,
    selectedLegendType: 'Stid'
};

const plantSettings: PlantSettings = {
    instCode: '',
    sapPlantId: '',
    proCoSysPlantId: '',
    plantName: ''
};

export const settings: Settings = {
    showTextHighlighting: true,
    plantSettings
};

export const plantsData: PlantsData = {
    plants: []
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

const defaultGlobalState: GlobalState = {
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
        apps: {}
    },
    activePanel: ActivePanel.None,
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    settings,
    plantsData,
    legendOptions
};

export default defaultGlobalState;
