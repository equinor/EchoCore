import { Atom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import { AppComponentProps } from './api';
import { Dict } from './common';
import { WrappedComponent } from './components';
import { LegendOptions } from './legend';
import { Module } from './modules';
import { Panel } from './panel';
import { PlantsData } from './plants';
import { Settings } from './settings';
import { UI } from './ui';

export interface GlobalState {
    modules: Array<Module>;
    registry: RegistryState;
    panels: Array<Panel>;
    ui: UI;
    activePanel: string;
    activeModule: string;
    userProfile?: User;
    userPhotoUrl?: string;
    legendOptions: LegendOptions;
    settings: Settings;
    plantsData: PlantsData;
    moduleState: EchoCustomState<unknown>;
}
export interface GlobalStateContext {
    state: Atom<GlobalState>;
}

export type EchoCustomState<T> = Partial<T>;

/**
 * The Echo global app sub-state container for registering application components.
 */
export interface RegistryState {
    /**
     * The registered app components for the router.
     */
    apps: Dict<AppRegistration>;
    panels: Dict<Array<Panel>>;
}

export interface AppRegistration extends BaseRegistration {
    component: WrappedComponent<AppComponentProps>;
    meta: AppMetaData;
}

export interface BaseRegistration {
    key: string;
}

export interface AppMetaData {
    name: string;
    icon: string;
    homeScreen?: boolean;
}
