import { getPlants, getPlantsData, setPlantsData } from '../../plants/globalPlantsDataActions';
import { legendOptions, plantsData, settings } from '../../state/defaultStates';
import { dispatch } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';
import { ActivePanel } from '../../types/panel';
import { PlantsData } from '../../types/plants';

beforeEach(() => {
    initialize();
});

const globalInit = {
    modules: [],
    panels: [],
    ui: {},
    activePanel: ActivePanel.None,
    activeModule: '',
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    legendOptions,
    plantsData,
    settings
};

function initialize(): void {
    dispatch(getCoreContext(), () => globalInit);
}

const mockPlantsData: PlantsData = {
    plants: [
        {
            instCode: 'JSV',
            description: 'description',
            sapPlantId: 'id',
            proCoSysPlantId: 'procosysId'
        },
        {
            instCode: 'JCA',
            description: 'description',
            sapPlantId: 'id2',
            proCoSysPlantId: 'procosysId2'
        }
    ]
};

describe('globalPlantsDataActions', () => {
    describe('getPlantsData', () => {
        it('should return default plantsData', () => {
            const result = getPlantsData();
            expect(result).toEqual(plantsData);
        });
        it('should return new plantsData', () => {
            setPlantsData(mockPlantsData);
            const result = getPlantsData();
            expect(result).toEqual(mockPlantsData);
        });
    });
    describe('getPlants', () => {
        it('should return default list of plants', () => {
            const plants = plantsData.plants;
            const result = getPlants();
            expect(result).toEqual(plants);
        });
        it('should return new list of plants', () => {
            const plants = mockPlantsData.plants;
            setPlantsData(mockPlantsData);
            const result = getPlants();
            expect(result).toEqual(plants);
        });
    });
});
