/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyComponent } from './components';
import { Icon, PanelUI } from './ui';

export enum PanelType {
    left = 'left',
    right = 'right',
    all = 'all'
}

export interface Panel {
    panelType: PanelType;
    component: AnyComponent<any>;
    key: string;
    label: string;
    icon: Icon;
    disabled?: boolean;
}

export interface EchoPanel {
    panels: Panel[];
    options: Partial<EchoPanelOptions>;
}

export interface ActivePanel {
    isPanelActive: boolean;
    activePanel: string;
    activeModulePanels: string;
    ui?: PanelUI;
}

export interface EchoPanelOptions extends PanelUI {
    addSearch: boolean;
}

export const ECHO_CORE_MAIN = 'echoCoreMain';
export const ECHO_CORE_SEARCH = 'echoCoreSearch';
