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

const defaultGlobalState: GlobalState = {
    modules: [],
    panels: [],
    ui: {},
    registry: {
        panels: {},
        apps: {}
    },
    activePanel: ActivePanel.None,
    activeModule: '',
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    settings,
    plantsData,
    legendOptions
};

export default defaultGlobalState;
