import { persistPlantsData } from '../../plants/persistPlantsData';
import { plantsData } from '../../state/defaultStates';
import { PlantsData } from '../../types/plants';

const localStore = persistPlantsData;

beforeEach(() => {
    localStore.persistPlantsDataInLocalStorage(plantsData);
    initialize();
});

function initialize(): void {
    jest.resetModules();
    jest.clearAllMocks();
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

describe('PersistPlantsData', () => {
    describe('getPlantsDataFromLocalStorage', () => {
        it('should return default settings', () => {
            const result = localStore.getPlantsDataFromLocalStorage();
            expect(result).toEqual(plantsData);
        });
        it('should return new plantsData (mockPlantsData)', () => {
            localStore.persistPlantsDataInLocalStorage(mockPlantsData);
            const result = localStore.getPlantsDataFromLocalStorage();
            expect(result).toEqual(mockPlantsData);
        });
    });
});
