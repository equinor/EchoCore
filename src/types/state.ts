import { Atom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import { ApplicationManifest } from './appModule';
import { LegendOptions } from './legend';
import { Panel } from './panel';

export interface GlobalState {
    modules: Array<ApplicationManifest>;
    panels: Array<Panel>;
    ui: UI;
    activePanel: string;
    moduleState: EchoCustomState<unknown>;
    activeModule: string;
    userProfile?: User;
    userPhotoUrl?: string;
    legendOptions: LegendOptions;
}

export interface UI {
    paddingTop?: number;
}
export interface GlobalStateContext {
    state: Atom<GlobalState>;
}

export type EchoCustomState<T> = Partial<T>;
