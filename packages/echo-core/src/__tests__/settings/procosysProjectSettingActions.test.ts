import { dispatch } from '../../actions/coreActions/globalActions';
import { getSelectedProcosysProject, setSelectedProcosysProject } from '../../settings/procosysProjectSettingsActions';
import { defaultGlobalState } from '../../state/defaultStates';
import { getCoreContext } from '../../state/globalState';
import { ProcosysProjectCode } from '../../types/procosysProjects';

beforeEach(() => {
    initialize();
});

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
}

describe('procosysProjectSettingActions', () => {
    const procosysProjectSettings = '' as ProcosysProjectCode;

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
});
