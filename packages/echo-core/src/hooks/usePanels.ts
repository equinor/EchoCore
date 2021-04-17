import { useCallback, useEffect, useState } from 'react';
import { dispatch } from '../actions/globalActions';
import { getCoreContext } from '../state/globalState';
import { useGlobalState } from '../state/useGlobalState';
import { Dict, EchoPanel, GlobalState, Panel, PanelType } from '../types';
import { PanelUI } from '../types/ui';
import { combinePanels, getCorePanels } from '../utils/panels';
import { useActivePanel } from './useApp';
import { useCorePanels } from './useCoreComponents';

interface UsePanels {
    modulePanels: Panel[];
    activePanel: string;
    isPanelActive: boolean;
    setActivePanel: (key: string) => void;
    panelUI: PanelUI;
}

/**
 *
 *
 * @export
 * @return {*}  {Dict<Panel[]>}
 */
export function useGlobalPanels(): Dict<EchoPanel> {
    return useGlobalState((state: GlobalState) => state.registry.panels);
}

/**
 * Echo Core hook for for handling panels defaults to left panel.
 * @param panelType can be set to `left`, `right` og `all`.
 * @returns {UsePanels} Returns and object `modulePanel`
 * , `setActivePanel`, `activePanel`, `isPanelActive` and `panelUI`.
 */
export default function usePanels(panelType = String(PanelType.left)): UsePanels {
    const panelsDict = useGlobalPanels();
    const [modulePanels, setModulePanels] = useState<Panel[]>([]);
    const { activePanel, isPanelActive } = useActivePanel();
    const corePanels = useCorePanels();
    const [panelUI, setPanelUI] = useState<PanelUI>({});

    const setActivePanel = useCallback(
        (key: string): void => {
            if (activePanel !== key) {
                dispatch(getCoreContext(), (s: GlobalState) => ({
                    ...s,
                    app: { ...s.app, activePanelState: { activePanel: key, isPanelActive: true } }
                }));
            } else {
                dispatch(getCoreContext(), (s: GlobalState) => ({
                    ...s,
                    app: { ...s.app, activePanelState: { activePanel: '', isPanelActive: false } }
                }));
            }
        },
        [activePanel]
    );

    useEffect(() => {
        const { panels, options } = panelsDict[activePanel];
        const { searchActive, addSearch, panel, panelButton, panelWrapper } = options;
        if (isPanelActive && panels) {
            searchActive && setActivePanel('searchPanel');
            setPanelUI({ panel, panelButton, panelWrapper });

            const combinedPanels = combinePanels(panels, addSearch ? addSearch : false, getCorePanels, corePanels);
            const filteredPanels =
                panelType === PanelType.all
                    ? combinedPanels
                    : combinedPanels.filter((panel) => panel.panelType === panelType);

            setModulePanels(filteredPanels);
        }
    }, [activePanel, isPanelActive, panelsDict, setActivePanel, panelType, corePanels]);

    return { modulePanels, setActivePanel, activePanel, isPanelActive, panelUI };
}
