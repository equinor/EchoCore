import {
    getProcosysProjectCode,
    getSelectedProcosysProject,
    setSelectedProcosysProject
} from '../../settings/procosysProjectSettingsActions';
import { defaultGlobalState } from '../../state/defaultStates';
import { dispatch } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';
import { ProcosysProject } from '../../types/procosysProjects';

beforeEach(() => {
    initialize();
});

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
}

describe('procosysProjectSettingActions', () => {
    const procosysProjectSettings: ProcosysProject = {
        projectCode: '',
        stidDeliveryCode: 0,
        description: '',
        isRevProject: '',
        filter: {
            value: '',
            text: ''
        }
    };

    describe('setSelectedProcosysProject', () => {
        it('should update or set the ProcosysProject', () => {
            setSelectedProcosysProject(procosysProjectSettings);
        });
    });

    describe('getSelectedProcosysProject', () => {
        it('should get the procosys project code', () => {
            setSelectedProcosysProject(procosysProjectSettings);
            const result = getSelectedProcosysProject();
            expect(procosysProjectSettings).toEqual(result);
        });
    });

    describe('getProcosysProjectCode', () => {
        it('should get the procosys project code', () => {
            setSelectedProcosysProject(procosysProjectSettings);
            const result = getProcosysProjectCode();
            expect(procosysProjectSettings.projectCode).toEqual(result);
        });
    });
});
