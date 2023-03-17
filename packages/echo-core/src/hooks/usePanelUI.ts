import { useGlobalState } from '../state/useGlobalState';
import { PanelUI } from '../types/ui';

/**
 *Echo Core hook for handling non-default panel ui.
 * @return {PanelUI}  Reads the ui state and returns a partial ui-object of type PanelUI
 */
export function usePanelUI(): PanelUI {
    return useGlobalState((state) => state.ui);
}
