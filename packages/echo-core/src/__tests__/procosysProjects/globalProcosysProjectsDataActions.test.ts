import { dispatch } from '../../actions/coreActions/globalActions';
import {
    getProcosysProjects,
    getProcosysProjectsData,
    setProcosysProjectsData
} from '../../procosysProjects/globalProjectsDataActions';
import { defaultGlobalState, procosysProjectsData } from '../../state/defaultStates';
import { getCoreContext } from '../../state/globalState';
import { ProcosysProjectsData } from '../../types/procosysProjects';

beforeEach(() => {
    initialize();
});

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
}

const mockProcosysProjectsData: ProcosysProjectsData = {
    procosysProjects: ['code1', 'code2']
};

describe('globalProcosysProjectsDataActions', () => {
    describe('getProcosysProjectsData', () => {
        it('should return default procosysProjectsData', () => {
            const result = getProcosysProjectsData();
            expect(result).toEqual(procosysProjectsData);
        });
        it('should return new procosysProjectsData', () => {
            setProcosysProjectsData(mockProcosysProjectsData);
            const result = getProcosysProjectsData();
            expect(result).toEqual(mockProcosysProjectsData);
        });
    });
    describe('getProcosysProjects', () => {
        it('should return default list of procosys projects', () => {
            const procosysProjects = procosysProjectsData.procosysProjects;
            const result = getProcosysProjects();
            expect(result).toEqual(procosysProjects);
        });
        it('should return new list of procosys projects', () => {
            const procosysProjects = mockProcosysProjectsData.procosysProjects;
            setProcosysProjectsData(mockProcosysProjectsData);
            const result = getProcosysProjects();
            expect(result).toEqual(procosysProjects);
        });
    });
});
