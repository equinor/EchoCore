import { useEffect, useState } from 'react';
import PanelHandler, { ACTIVE_PANEL_KEY, PANEL_KEY } from '../panels/corePanels';
import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { GlobalState, Panel, PanelType } from '../types';
import { PanelUI } from '../types/ui';
import usePanelUI from './usePanelUI';

interface UsePanels {
    modulePanels: Panel[];
    activePanel: string;
    isPanelActive: boolean;
    setActivePanel: (key: string) => void;
    panelUI: PanelUI;
}

/**
 * Echo Core hook for for handling panels defaults to left panel.
 * @param panelType can be set to `left`, `right` og `all`.
 * @returns {UsePanels} Returns and object `modulePanel`
 * , `setActivePanel`, `activePanel`, `isPanelActive` and `panelUI`.
 */

function usePanels(panelType = String(PanelType.left)): UsePanels {
    const [modulePanels, setModulePanels] = useState<Panel[]>([]);
    const [activePanel, setPanel] = useState<string>(readState(getCoreContext(), (state): string => state.activePanel));
    const panelUI = usePanelUI();
    const [isPanelActive, setIsPanelActive] = useState<boolean>(false);

    useEffect(() => {
        function handleUpdatePanels(panels: Panel[]): void {
            const data = panelType === PanelType.all ? panels : panels.filter((panel) => panel.panelType === panelType);
            setModulePanels(data);
        }

        const panelId = PanelHandler.addSubscriber(handleUpdatePanels, PANEL_KEY);

        return (): void => {
            PanelHandler.removeSubscriber(panelId);
        };
    }, [panelType]);

    useEffect(() => {
        if (!!modulePanels.find((panel: Panel) => panel.key === activePanel)) setIsPanelActive(true);
        else setIsPanelActive(false);
    }, [activePanel, modulePanels]);

    useEffect(() => {
        function handleActivePanel(key: string): void {
            setPanel(key);
        }

        const activePanelId = PanelHandler.addSubscriber(handleActivePanel, ACTIVE_PANEL_KEY);

        return (): void => {
            PanelHandler.removeSubscriber(activePanelId);
        };
    }, []);

    function setActivePanel(key: string): void {
        dispatch(getCoreContext(), (s: GlobalState) => ({ ...s, activePanel: key }));
        PanelHandler.notify(
            readState<string>(getCoreContext(), (state) => state.activePanel),
            ACTIVE_PANEL_KEY
        );
    }

    return { modulePanels, setActivePanel, activePanel, isPanelActive, panelUI };
}

export default usePanels;
