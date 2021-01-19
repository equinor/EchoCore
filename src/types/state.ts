import { Atom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import { ApplicationManifest } from './appModule';
import { LegendOptions } from './legend';
import { Panel } from './panel';
import { Settings } from './settings';

export interface GlobalState {
    modules: Array<ApplicationManifest>;
    panels: Array<Panel>;
    activePanel: string;
    moduleState: EchoCustomState<unknown>;
    activeModule: string;
    userProfile?: User;
    userPhotoUrl?: string;
    legendOptions: LegendOptions;
    settings: Settings;
}

export interface GlobalStateContext {
    state: Atom<GlobalState>;
}

export type EchoCustomState<T> = Partial<T>;
