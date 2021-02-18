export interface PanelUI {
    panelTop?: React.CSSProperties;
}

export type UI = {
    [key: string]: React.CSSProperties | undefined;
};
export interface UIItem {
    [key: string]: React.CSSProperties;
}
