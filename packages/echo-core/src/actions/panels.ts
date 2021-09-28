import { getCoreContext } from '../state/globalState';
import { Dict, EchoPanel, Panel } from '../types';
import { GlobalState } from '../types/state';
import { addOrOverwriteWithKey } from '../utils/state';
import { dispatch, readState } from './coreActions/globalActions';

/**
 * For registering the core Main Menu and Search Panel
 *
 * @export
 * @template TKey
 * @param {TKey} key
 * @param {(Panel | Array<Panel>)} panels
 */
export function registerCorePanels(searchPanel: Panel, mainMenu: Panel): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        coreComponents: {
            panels: {
                searchPanel,
                mainMenu
            }
        }
    }));
}

/**
 * returns all panels registered,
 *
 * @export
 * @return {*}  {Dict<EchoPanel[]>}
 */
export function getPanelsData(): Dict<EchoPanel> {
    return readState(getCoreContext(), (state: GlobalState) => state.registry.panels);
}

/**
 * Return the current panel by key
 *
 * @export
 * @param {string} key
 * @return {*}  {(EchoPanel[] | undefined)}
 */
export function getPanelByKey(key: string): EchoPanel | undefined {
    const panelsDict = getPanelsData();
    return panelsDict[key];
}

export function updatePanelByKey(key: string, panel: EchoPanel): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: addOrOverwriteWithKey(s.registry.panels, key, panel)
        }
    }));
}

/**
 * Echo Core helper method for setting active panel
 * if the setActivePanel is called with same key twice it will close the panel
 * it will also close if called with empty string,
 *
 * @export
 * @param {string} key to identify which panel to open
 */
export function setActivePanel(key: string): void {
    dispatch(getCoreContext(), (s: GlobalState) => {
        const activePanel = s.app.activePanelState.activePanel !== key ? key : '';
        const isPanelActive = activePanel !== '' ? true : false;
        return {
            ...s,
            app: {
                ...s.app,
                activePanelState: {
                    ...s.app.activePanelState,
                    activePanel,
                    isPanelActive
                }
            }
        };
    });
}
/**
 * Echo Core helper method for setting active panels related to an module
 *
 * @export
 * @param {string} key to identify which panel to open
 */
export function setActiveModulePanels(key: string): void {
    dispatch(getCoreContext(), (s: GlobalState) => {
        return {
            ...s,
            app: {
                ...s.app,
                activePanelState: {
                    ...s.app.activePanelState,
                    activeModulePanels: key,
                    ui: {}
                }
            }
        };
    });
}

/**
 * When defining panel sates when registering an app.
 * This function allows you to toggle between them using the key used in the state. *
 * @export
 * @param {string} key
 */
export function setCustomUIPanelState(key: string): void {
    dispatch(getCoreContext(), (s: GlobalState) => {
        const activePanelsKey = s.app.activePanelState.activeModulePanels;
        const activePanelKey = s.app.activePanelState.activePanel;
        const panelIndex = s.registry.panels[activePanelsKey].panels.findIndex((panel) => panel.key === activePanelKey);

        if (panelIndex === -1) return s;
        const panels = s.registry.panels[activePanelsKey].panels;
        panels[panelIndex].activeCustomUiState = key;

        return {
            ...s,

            registry: {
                ...s.registry,
                panels: {
                    ...s.registry.panels,
                    [activePanelsKey]: {
                        ...s.registry.panels[activePanelsKey],
                        panels
                    }
                }
            }
        };
    });
}
