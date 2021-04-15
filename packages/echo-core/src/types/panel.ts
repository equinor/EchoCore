import React from 'react';
import { AnyComponent } from './components';
import { UI } from './ui';

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
    ui?: UI;
    disabled?: boolean;
}

export enum ActivePanel {
    AppMenu = 'AppMenu',
    ToolMenu = 'ToolMenu',
    None = ''
}
