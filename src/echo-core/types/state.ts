import { Atom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import BaseError from '../../echo-base/errors/BaseError';
import { AppComponentProps } from './api';
import { Dict } from './common';
import { AnyComponent, WrappedComponent } from './components';
import { LegendOptions } from './legend';
import { AppModule } from './modules';
import { Panel } from './panel';
import { PlantsData } from './plants';
import { Settings } from './settings';
import { UI } from './ui';

export interface GlobalState {
    app: EchoAppState;
    modules: Array<AppModule>;
    registry: RegistryState;
    panels: Array<Panel>;
    ui: UI;
    activePanel: string;
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
    routes: Dict<RouteRegistration>;
    panels: Dict<Array<Panel>>;
}

export interface RouteRegistration extends BaseRegistration {
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

export interface ModuleApi {
    registerApp: <Key extends string>(
        name: Key,
        Component: AnyComponent<AppComponentProps>,
        meta?: AppMetaData
    ) => void;
    unRegisterApp: <Key extends string>(name: Key) => void;
    registerPanels: <Key extends string>(key: Key, panels: Panel | Array<Panel>) => void;
    unRegisterPanes: <Key extends string>(key: Key) => void;
}

export class AppError extends BaseError {}

/**
 * The Echo global app sub-state container for app information.
 */
export interface EchoAppState {
    /**
     * Information for the layout computation.
     */
    layout: LayoutType;
    /**
     * Gets if the application is currently performing a background loading
     * activity, e.g., for loading modules asynchronously or fetching
     * translations.
     */
    loading: boolean;
    /**
     * Gets an unrecoverable application error, if any.
     */
    error: AppError | undefined;
}

/**
 * The different known layout types.
 */
export type LayoutType = 'mobile' | 'tablet' | 'desktop';
