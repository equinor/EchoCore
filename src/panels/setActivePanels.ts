import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { GlobalState } from '../types';
import PanelHandler, { ACTIVE_PANEL_KEY } from './corePanels';
/**
 * * Echo Core helper method for setting active panel
 *
 * @export
 * @param {string} key to identify which panel to open
 */
export function setActivePanel(key: string): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({ ...s, activePanel: key }));
    PanelHandler.notify(
        readState<string>(getCoreContext(), (state) => state.activePanel),
        ACTIVE_PANEL_KEY
    );
}
