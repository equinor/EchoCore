import { readState } from '../../actions/globalActions';
import { setActivePanel } from '../../actions/panels';
import { getCoreContext } from '../../state/globalState';
import { GlobalState } from '../../types/state';

describe('setActivePanel', () => {
    it('should update active panel in state ', () => {
        setActivePanel('test');

        expect('test').toEqual(
            readState(getCoreContext(), (state: GlobalState) => state.app.activePanelState.activePanel)
        );
    });
});
