import { GlobalState } from '../..';
import PanelHandler from '../../panels/corePanels';
import { setActivePanel } from '../../panels/setActivePanels';
import { readState } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';

describe('setActivePanel', () => {
    it('should update active panel in state ', () => {
        const notifySpy = jest.spyOn(PanelHandler, 'notify');
        setActivePanel('test');

        expect('test').toEqual(readState(getCoreContext(), (state: GlobalState) => state.activePanel));
        expect(notifySpy).toBeCalledWith('test', 'active-panel');
    });
});
