import { LegendOptions } from '../types';
import { PlantsData } from '../types/plants';
import { Settings } from '../types/settings';

export const legendOptions: LegendOptions = {
    isActive: true,
    selectedLegendType: 'Stid'
};

export const settings: Settings = {
    hasAcceptedTerms: false,
    hasDoneOnboarding: false,
    instCode: '',
    sapPlantId: '',
    proCoSysPlantId: '',
    plantName: '',
    showTextHighlighting: true
};

export const plantsData: PlantsData = {
    plants: []
};
