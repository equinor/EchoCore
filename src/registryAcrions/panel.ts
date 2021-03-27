import { dispatch } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { useGlobalState } from '../state/useGlobalState';
import { Dict, Panel } from '../types';
import { GlobalState } from '../types/state';
import { addOrOverwriteWithKey, removeWithKey } from '../utils/state';

export function registerPanels<TKey extends string>(key: TKey, panels: Panel | Array<Panel>): void {
    const newPanels: Array<Panel> = panels instanceof Array ? panels : [panels];
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: addOrOverwriteWithKey(s.registry.panels, key, newPanels)
        }
    }));
}

export function unnRegisterPanels<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: removeWithKey(s.registry.panels, key)
        }
    }));
}

export function usePanels(): Dict<Panel[]> {
    return useGlobalState((state: GlobalState) => state.registry.panels);
}

export function usePanelByKey(key: string): Panel[] | undefined {
    const panelsDict = usePanels();
    return panelsDict[key];
}
