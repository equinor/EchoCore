import PanelHandler, { ACTIVE_PANEL_KEY, ECHO_CORE_SEARCH, PANEL_KEY } from '../panels/corePanels';
import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { GlobalState, Panel } from '../types';

export interface EchoPanelRegister {
    panels: Panel[];
    options: EchoPanelOptions;
}

export interface EchoPanelOptions {
    searchActive: boolean;
    customPanelActive: string;
    addSearch: boolean;
    paddingTop: number;
}

/**
 * Core Action for registering panels
 * @param panels
 * @param options
 */
function registerPanels(panels: Panel[] = [], options: Partial<EchoPanelOptions> = {}): void {
    const { addSearch, searchActive, customPanelActive, paddingTop } = options;

    const newPanels = PanelHandler.combinePanels(
        panels,
        addSearch === undefined ? true : addSearch,
        PanelHandler.getCorePanels
    );

    const activePanel = customPanelActive ? customPanelActive : searchActive ? ECHO_CORE_SEARCH : '';

    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        panels: newPanels,
        ui: { ...s.ui, paddingTop },
        activePanel
    }));

    /**
     * reason for setTimeout is conflict with registerPanel and notify.
     * TODO: add RXJS
     */
    setTimeout(() => {
        PanelHandler.notify(
            readState<Panel[]>(getCoreContext(), (state) => state.panels),
            PANEL_KEY
        );
        PanelHandler.notify(
            readState(getCoreContext(), (state): string => state.activePanel),
            ACTIVE_PANEL_KEY
        );
    }, 200);
}

export default registerPanels;
