import { persistProcosysProjectsData } from '../../procosysProjects/persistProjectsData';
import { procosysProjectsData } from '../../state/defaultStates';
import { ProcosysProjectsData } from '../../types/procosysProjects';

const localStore = persistProcosysProjectsData;

beforeEach(() => {
    localStore.persistProcosysProjectsDataInLocalStorage(procosysProjectsData);
    initialize();
});

function initialize(): void {
    jest.resetModules();
    jest.clearAllMocks();
}

const mockProcosysProjectsData: ProcosysProjectsData = {
    procosysProjects: [
        {
            projectCode: 'code',
            stidDeliveryCode: 0,
            description: 'desc',
            isRevProject: 'Y',
            filter: {
                value: 'code',
                text: 'code'
            }
        },
        {
            projectCode: 'code',
            stidDeliveryCode: 0,
            description: 'desc',
            isRevProject: 'Y',
            filter: {
                value: 'code',
                text: 'code'
            }
        }
    ]
};

describe('PersistProcosysProjectsData', () => {
    describe('getProcosysProjectsDataFromLocalStorage', () => {
        it('should return default settings', () => {
            const result = localStore.getProcosysProjectsDataFromLocalStorage();
            expect(result).toEqual(procosysProjectsData);
        });
        it('should return new procosysProjectsData (mockProcosysProjectsData)', () => {
            localStore.persistProcosysProjectsDataInLocalStorage(mockProcosysProjectsData);
            const result = localStore.getProcosysProjectsDataFromLocalStorage();
            expect(result).toEqual(mockProcosysProjectsData);
        });
    });
});
