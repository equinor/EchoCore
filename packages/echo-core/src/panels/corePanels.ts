import { ObserverClass } from '../observers/classObserver';
import { Panel } from '../types';

export const ECHO_CORE_MAIN = 'echoCoreMain';
export const ECHO_CORE_SEARCH = 'echoCoreSearch';
export const PANEL_KEY = 'panel';
export const ACTIVE_PANEL_KEY = 'active-panel';

class PanelHandlerClass extends ObserverClass {
    private searchPanel: Panel | undefined;
    private mainMenu: Panel | undefined;
    // eslint-disable-next-line
    constructor() {
        super();
    }

    registerCorePanels = (searchPanel: Panel, mainMenu: Panel): void => {
        this.mainMenu = mainMenu;
        this.searchPanel = searchPanel;
    };

    getCorePanels = (addSearch = true): Panel[] => {
        if (!this.searchPanel || !this.mainMenu) return [];

        const panels: Panel[] = [];
        if (addSearch) panels.push(this.searchPanel);
        panels.push(this.mainMenu);
        return panels;
    };

    combinePanels = (
        modulePanels: Panel[],
        addSearch: boolean,
        corePanels: (searchActive: boolean) => Panel[]
    ): Panel[] => {
        const panels = [...corePanels(addSearch), ...modulePanels];
        this.notify(panels, PANEL_KEY);
        return panels;
    };
}
export const PanelHandler = new PanelHandlerClass();
