import { useCallback, useEffect, useState } from 'react';
import { dispatch } from '../actions/coreActions/globalActions';
import { getCoreContext } from '../state/globalState';
import { useGlobalState } from '../state/useGlobalState';
import { Dict, EchoPanel, GlobalState, Panel, PanelType } from '../types';
import { PanelUI } from '../types/ui';
import { combinePanels, getCorePanels } from '../utils/panels';
import { useActivePanelState } from './useApp';
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
export function usePanels(panelType = String(PanelType.left)): UsePanels {
    const panelsDict = useGlobalPanels();
    const corePanels = useCorePanels();
    const [modulePanels, setModulePanels] = useState<Panel[]>([]);
    const { activePanel, activeModulePanels } = useActivePanelState();
    const [panelUI, setPanelUI] = useState<PanelUI>({});
    const [isPanelActive, setIsPanelActive] = useState<boolean>(false);

    const setActivePanel = useCallback(
        (key: string): void => {
            const newActivePanel =
                activePanel !== key
                    ? { activePanel: key, isPanelActive: true }
                    : { activePanel: key, isPanelActive: false };
            dispatch(getCoreContext(), (s: GlobalState) => ({
                ...s,
                app: {
                    ...s.app,
                    activePanelState: { ...s.app.activePanelState, ...newActivePanel }
                }
            }));
            setPanelUI({});
        },
        [activePanel]
    );

    useEffect(() => {
        if (activePanel === '') {
            setPanelUI({});
            return;
        }
        const currentActivePanel: Panel | undefined = modulePanels.find((panel: Panel) => panel.key === activePanel);
        if (currentActivePanel && currentActivePanel.customUiStates) {
            const activeCustomUiState =
                currentActivePanel.defaultActiveUiState && !isPanelActive
                    ? currentActivePanel.defaultActiveUiState
                    : currentActivePanel?.activeCustomUiState && currentActivePanel?.activeCustomUiState !== ''
                    ? currentActivePanel?.activeCustomUiState
                    : 'open';
            const uiState = currentActivePanel.customUiStates[activeCustomUiState];

            setPanelUI({ ...uiState });
        }
    }, [activePanel, isPanelActive, modulePanels]);

    useEffect(() => {
        const currentActivePanel: Panel | undefined = modulePanels.find((panel: Panel) => panel.key === activePanel);
        if (currentActivePanel) setIsPanelActive(true);
        else setIsPanelActive(false);
    }, [activePanel, modulePanels]);

    useEffect(() => {
        const activeAppPanels = panelsDict[activeModulePanels];
        if (!activeAppPanels) {
            const currentCorePanels = getCorePanels(true, corePanels);
            setModulePanels(
                panelType === PanelType.all
                    ? currentCorePanels
                    : currentCorePanels.filter((panel) => panel.panelType === panelType)
            );
            return;
        }

        const { panels, options } = activeAppPanels;
        const { addSearch } = options;

        if (panels) {
            const combinedPanels = combinePanels(panels, addSearch ? addSearch : false, getCorePanels, corePanels);
            setModulePanels(
                panelType === PanelType.all
                    ? combinedPanels
                    : combinedPanels.filter((panel) => panel.panelType === panelType)
            );
        }
    }, [panelsDict, setActivePanel, panelType, corePanels, activeModulePanels]);
    return { modulePanels, setActivePanel, activePanel, isPanelActive, panelUI };
}

// setPanelUI({ panel, panelButton, panelWrapper });
