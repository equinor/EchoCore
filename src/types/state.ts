import { Atom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import { ApplicationManifest } from './appModule';
import { LegendOptions } from './legend';
import { Panel } from './panel';

export interface GlobalState {
    modules: Array<ApplicationManifest>;
    panels: Array<Panel>;
    activePanel: string;
    moduleState: EchoCustomState<unknown>;
    activeModule: string;
    userProfile?: User;
    userPhotoUrl?: string;
    legendOptions: LegendOptions;
}

export interface GlobalStateContext {
    state: Atom<GlobalState>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type EchoCustomState<T> = Partial<T>;
