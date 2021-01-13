import { Atom } from '@dbeining/react-atom';
import { ApplicationManifest } from './appModule';
import { LegendOptions } from './legend';
import { Panel } from './panel';

export interface GlobalState {
    modules: Array<ApplicationManifest>;
    panels: Array<Panel>;
    activePanel: string;
    moduleState: EchoCustomState<unknown>;
    activeModule: string;
    legendOptions: LegendOptions;
}

export interface GlobalStateContext {
    state: Atom<GlobalState>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type EchoCustomState<T> = Partial<T>;
