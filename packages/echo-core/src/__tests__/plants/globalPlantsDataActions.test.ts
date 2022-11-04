import { dispatch } from '../../actions/coreActions/globalActions';
import { getPlants, getPlantsData, setPlantsData } from '../../actions/plantsData';
import { defaultGlobalState, plantsData } from '../../state/defaultStates';
import { getCoreContext } from '../../state/globalState';
import { PlantsData } from '../../types/plants';

beforeEach(() => {
    initialize();
    setPlantsData({ plants: [] });
});

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
}

const mockPlantsData: PlantsData = {
    plants: [
        {
            instCode: 'JSV',
            hasTr2000: true,
            description: 'description',
            sapPlantId: 'id',
            proCoSysPlantId: 'procosysId'
        },
        {
            instCode: 'JCA',
            hasTr2000: true,
            description: 'description',
            sapPlantId: 'id2',
            proCoSysPlantId: 'procosysId2'
        }
    ]
};

describe('globalPlantsDataActions', () => {
    describe('getPlantsData', () => {
        it('should return default/empty plantsData', () => {
            const result = getPlantsData();
            expect(result).toEqual(plantsData);
        });
        it('should return new plantsData', () => {
            setPlantsData(mockPlantsData);
            const result = getPlantsData();
            expect(result).toEqual(mockPlantsData);
        });

        it('should clear plants', () => {
            setPlantsData(mockPlantsData);
            const result = getPlantsData();
            expect(result).toEqual(mockPlantsData);

            setPlantsData({ plants: [] });
            const result2 = getPlantsData();
            expect(result2).toEqual({ plants: [] });
        });
    });
    describe('getPlants', () => {
        it('should return empty/default list of plants', () => {
            const result = getPlants();
            expect(result).toStrictEqual(plantsData.plants);
        });
        it('should return new list of plants', () => {
            const plants = mockPlantsData.plants;
            setPlantsData(mockPlantsData);
            const result = getPlants();
            expect(result).toEqual(plants);
        });
    });
});
