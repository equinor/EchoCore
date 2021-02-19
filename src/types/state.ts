import { Atom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import { ApplicationManifest } from './appModule';
import { LegendOptions } from './legend';
import { Panel } from './panel';
import { Settings } from './settings';
import { UI } from './ui';

export interface GlobalState {
    modules: Array<ApplicationManifest>;
    panels: Array<Panel>;
    ui: UI;
    activePanel: string;
    activeModule: string;
    userProfile?: User;
    userPhotoUrl?: string;
    legendOptions: LegendOptions;
    settings: Settings;
    moduleState: EchoCustomState<unknown>;
}
export interface GlobalStateContext {
    state: Atom<GlobalState>;
}

export type EchoCustomState<T> = Partial<T>;
