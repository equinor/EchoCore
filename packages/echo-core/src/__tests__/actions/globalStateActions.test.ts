import { readState } from '../../actions/coreActions/globalActions';
import { setModuleState } from '../../modules/moduleContext';
import { getCoreContext } from '../../state/globalState';
import { GlobalState } from '../../types/state';

describe('globalStateActions', () => {
    const mockModuleState = {
        test: 'test'
    };

    function state(): unknown {
        return readState(getCoreContext(), (state: GlobalState) => state.moduleState);
    }

    describe('setModuleState', () => {
        it('should set the module state', () => {
            const preState = state();
            setModuleState(mockModuleState);
            const postState = state();
            expect(preState).not.toBe(mockModuleState);
            expect(postState).toEqual(mockModuleState);
        });
    });
});
