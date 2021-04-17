/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AnyComponent } from './components';
import { PanelUI } from './ui';

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
    icon: React.FC | string;
    disabled?: boolean;
}

export enum ActivePanel {
    AppMenu = 'AppMenu',
    ToolMenu = 'ToolMenu',
    None = ''
}

export interface EchoPanel {
    panels: Panel[];
    options: Partial<EchoPanelOptions>;
}

export interface EchoPanelOptions extends PanelUI {
    searchActive: boolean;
    customPanelActive: string;
    addSearch: boolean;
}
