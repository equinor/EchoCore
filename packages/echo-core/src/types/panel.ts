/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyComponent } from './components';
import { Icon, PanelUI } from './ui';

export enum PanelType {
    left = 'left',
    right = 'right',
    all = 'all'
}

export type AppPanel = BasePanel;

export interface BasePanel {
    panelType: PanelType;
    component: AnyComponent<any>;
    label: string;
    icon: Icon;
    disabled?: boolean;
}
export interface Panel extends BasePanel {
    key: string;
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
