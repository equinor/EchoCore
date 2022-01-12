import React from 'react';
import { GlobalState, LegendOptions, ModuleContext } from '../types';
import { PlantsData } from '../types/plants';
import { ProcosysProjectCode, ProcosysProjectsData } from '../types/procosysProjects';
import { PlantSettings, Settings } from '../types/settings';

export const legendOptions: LegendOptions = {
    isActive: true,
    selectedLegendType: 'Stid',
    toggledStatuses: []
};

const plantSettings: PlantSettings = {
    instCode: '',
    hasTr2000: false,
    sapPlantId: '',
    proCoSysPlantId: '',
    plantName: ''
};

const selectedProcosysProject = '' as ProcosysProjectCode;

export const settings: Settings = {
    showTextHighlighting: true,
    selectedProcosysProject,
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
        layout: 'desktop',
        activeModuleContextProvider: '',
        activePanelState: {
            activePanel: '',
            activeModulePanels: '',
            isPanelActive: false
        },
        activeState: {
            activeTagNo: '',
            activeDocumentNo: '',
            activeFileId: ''
        }
    },
    coreComponents: {
        panels: {}
    },
    modules: [],
    ui: {},
    registry: {
        panels: {},
        routes: {},
        appLinks: {}
    },
    moduleContext: React.createContext({}) as ModuleContext<unknown>,
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    settings,
    plantsData,
    procosysProjectsData,
    legendOptions
};
