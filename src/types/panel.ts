import React from 'react';
import { AnyComponent } from './components';

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
    icon: React.FC;
}

export enum ActivePanel {
    AppMenu = 'AppMenu',
    ToolMenu = 'ToolMenu',
    None = ''
}
