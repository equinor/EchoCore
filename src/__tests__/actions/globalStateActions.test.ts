import { setModuleState } from '../../actions/globalStateActions';
import { readState } from '../../state/globalActions';
import { CoreContext } from '../../state/globalState';
import { GlobalState } from '../../types/state';

describe('globalStateActions', () => {
    const mockModuleState = {
        test: 'test'
    };

    describe('setModuleState', () => {
        it('should set the module state', () => {
            setModuleState(mockModuleState);
            expect(readState(CoreContext, (state: GlobalState) => state.moduleState)).toEqual(mockModuleState);
        });
    });
});
