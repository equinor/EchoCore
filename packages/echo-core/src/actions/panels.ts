import { getCoreContext } from '../state/globalState';
import { Dict, EchoPanel, EchoPanelOptions, Panel } from '../types';
import { GlobalState } from '../types/state';
import { addOrOverwriteWithKey, removeWithKey } from '../utils/state';
import { dispatch, readState } from './globalActions';

/**
 * Core Action for registering panels
 * @param panels
 * @param options
 */
export function registerPanels<TKey extends string>(
    key: TKey,
    panels: Panel[] = [],
    options: Partial<EchoPanelOptions> = {}
): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: addOrOverwriteWithKey(s.registry.panels, key, {
                panels: panels instanceof Array ? panels : [panels],
                options
            })
        }
    }));
}

/**
 *
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
 *
 *
 * @export
 * @template TKey
 * @param {TKey} key
 */
export function unnRegisterPanels<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: removeWithKey(s.registry.panels, key)
        }
    }));
}

/**
 *
 *
 * @export
 * @return {*}  {Dict<Panel[]>}
 */
export function getPanelsData(): Dict<EchoPanel> {
    return readState(getCoreContext(), (state: GlobalState) => state.registry.panels);
}

/**
 *
 *
 * @export
 * @param {string} key
 * @return {*}  {(Panel[] | undefined)}
 */
export function getPanelByKey(key: string): EchoPanel | undefined {
    const panelsDict = getPanelsData();
    return panelsDict[key];
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
                    activePanel,
                    isPanelActive
                }
            }
        };
    });
}
