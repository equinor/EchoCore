export interface PanelUI {
    panelWrapper?: React.CSSProperties;
    panel?: React.CSSProperties;
    panelButton?: React.CSSProperties;
}

export type UI = {
    [key: string]: React.CSSProperties | undefined;
};
