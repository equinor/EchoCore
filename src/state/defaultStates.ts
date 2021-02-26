import { ActivePanel, GlobalState, LegendOptions } from '../types';
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

const defaultGlobalState: GlobalState = {
    modules: [],
    panels: [],
    ui: {},
    activePanel: ActivePanel.None,
    activeModule: '',
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    settings,
    legendOptions
};

export default defaultGlobalState;
