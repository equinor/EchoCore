import { Atom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import React from 'react';
import { GlobalsStateActions } from './actions';
import { Dict } from './common';
import { LegendOptions } from './legend';
import { AppModule, ModuleAppError } from './modules';
import { ActivePanel, Panel } from './panel';
import { PlantsData } from './plants';
import { ProcosysProjectsData } from './procosysProjects';
import { RegistryState } from './registry';
import { Settings } from './settings';
import { UI } from './ui';

/**
 * The global state, the hart of Echo. The state contains user related data,
 * like user info and application settings. This state is not meant to have any search data
 * or large data sets. The active module is able to use the moduleState or the context provider.
 *
 * @export
 * @interface GlobalState
 */
export interface GlobalState {
    app: EchoAppState;
    modules: Array<AppModule>;
    coreComponents: EchoCoreComponents;
    registry: RegistryState;
    ui: Dict<UI>;
    userProfile?: User;
    userPhotoUrl?: string;
    legendOptions: LegendOptions;
    settings: Settings;
    plantsData: PlantsData;
    procosysProjectsData: ProcosysProjectsData;
    moduleState: EchoCustomState<unknown>;
    moduleContext: ModuleContext<unknown>;
}
export interface GlobalStateContext {
    state: Atom<GlobalState>;
    actions: GlobalsStateActions;
}

export type EchoCustomState<T> = Partial<T>;

export type ModuleContext<T = {}> = React.Context<T>;

export interface EchoCoreComponents {
    panels: Dict<Panel>;
}

export interface CorePanels {
    mainMenu: Panel;
    searchPanel: Panel;
}

/**
 * The Echo global app sub-state container for app information.
 */
export interface EchoAppState {
    /*
     * The key for the active application panel.
     */
    activePanelState: ActivePanel;
    activeState: ActiveState;
    activeModuleContextProvider: string;

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
    error: ModuleAppError | undefined;
}

export interface ActiveState {
    activeTagNo: string;
    activeDocumentNo: string;
    activeFileId: string;
}

/**
 * The different known layout types.
 */
export type LayoutType = 'mobile' | 'tablet' | 'desktop';
