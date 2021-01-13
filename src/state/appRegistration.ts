import PanelHandler from '../panels/corePanels';
import { ApplicationManifest, GlobalState, Panel } from '../types';
import { dispatch, readState } from './globalActions';
import { getCoreContext } from './globalState';

/**
 *
 * @param appManifest
 * @param searchActive
 */
export function registerApplication(appManifest: ApplicationManifest, searchActive = true): GlobalState {
    const panels = PanelHandler.combinePanels(
        appManifest.panels ? appManifest.panels : [],
        searchActive,
        PanelHandler.getCorePanels
    );
    dispatch(getCoreContext(), (s: GlobalState) => ({ ...s, panels, modules: [...s.modules, appManifest] }));
    PanelHandler.notify(
        readState<Panel[]>(getCoreContext(), (state) => state.panels),
        'panels'
    );
    return readState<GlobalState>(getCoreContext(), (state) => state);
}
