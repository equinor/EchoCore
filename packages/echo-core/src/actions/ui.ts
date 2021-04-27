import { getCoreContext } from '../state/globalState';
import { GlobalState, PanelUI } from '../types';
import { dispatch } from './coreActions/globalActions';
import { getPanelByKey, updatePanelByKey } from './panels';

function updatePanelUIByModuleKey(key: string, ui?: PanelUI): void {
    const panelData = getPanelByKey(key);
    if (panelData) {
        updatePanelByKey(key, { ...panelData, ...ui });
    }
}

function updateCorePanelUI(ui?: PanelUI): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        app: {
            ...s.app,
            activePanelState: {
                ...s.app.activePanelState,
                ui
            }
        }
    }));
}

export function updatePanelUI(ui?: PanelUI, key?: string): void {
    if (key) {
        updatePanelUIByModuleKey(key, ui);
    } else {
        updateCorePanelUI(ui);
    }
}
