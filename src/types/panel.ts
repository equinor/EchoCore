export enum PanelType {
    left = 'left',
    right = 'right',
    all = 'all'
}

export interface Panel {
    panelType: PanelType;
    component: React.FC;
    key: string;
    label: string;
    icon: React.FC;
}

export enum ActivePanel {
    AppMenu = 'AppMenu',
    ToolMenu = 'ToolMenu',
    None = ''
}
