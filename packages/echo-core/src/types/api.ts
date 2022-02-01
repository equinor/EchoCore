import { EchoEventHub, EchoModuleApi as ModuleApi, ModuleMetaData } from '@equinor/echo-base';
import React from 'react';
import { RegisterAppOptions } from '../actions/coreActions/app';
import { EchoPanelOptions, Panel, PanelUI } from './';
import { RouteBaseProps, WrappedComponent } from './components';
import { ExtensionRegistration } from './registry/extension.types';
import { AppLinkOptions } from './registry/registry';

export type VoidFunction = () => void;
export type UnRegisterPage = VoidFunction;
export type UnRegisterPanels = VoidFunction;
export type UnRegisterApp = VoidFunction;
export type UnRegisterExtension = VoidFunction;
export type RegisterApp = (appComponent: WrappedComponent<AppComponentProps>, options?: AppOptions) => UnRegisterApp;
export type RegisterPanels = (key: string, panels: Panel[], options?: Partial<EchoPanelOptions>) => UnRegisterPanels;
export type RegisterAppWithKey = (key: string, options: RegisterAppOptions) => UnRegisterApp;
export type UpdatePanelUI = (ui?: PanelUI, key?: string) => void;
export type RegisterPage = (path: string, component: React.FC, options?: PageOptions) => UnRegisterPage;

declare module '@equinor/echo-base' {
    /**
     *  Api for handling all registration of app, links and panels
     *
     * @interface EchoModuleApi
     */
    interface EchoModuleApi {
        meta: ModuleMetaData;
        eventHub: EchoEventHub;
        /**
         * Used for registration of the main application in a module,
         * based on the modules manifest, this wil provide app on path specified in manifest and link to application,
         * the optional options parameter can help wit configuring the application.
         *
         * To add application panel this can be done with the AppOptions
         *
         * @param {WrappedComponent<AppComponentProps>} component
         * @param {AppOptions} [options={}]
         * @return {*}  {unRegisterApp} unregister function for the registered app
         */
        registerApp: RegisterApp;
        /**
         * Used for registration of the main application in a module,
         * based on the modules manifest, this wil provide app on path specified in manifest and link to application,
         * the optional options parameter can help wit configuring the application.
         * To add application panel this can be done with the AppOptions
         *
         * @export
         * @param {string} key
         * @param {RegisterAppOptions} options
         *  {unRegisterApp} unregister function for the registered app
         */
        registerAppWithKey: RegisterAppWithKey;
        /**
         * Action for registering panels with a provided key
         * this key mus correspond to a application path to be triggered automatically
         * if not it need to be triggered by the `setActiveModulePanels` Action
         *
         * @export
         * @template TKey
         * @param {TKey} key
         * @param {(Panel[] | Panel)} [panels=[]]
         * @param {Partial<EchoPanelOptions>} [options={}]
         * {unRegisterPanels} unregister function for the registered panels
         */
        registerPanels: RegisterPanels;
        updatePanelUI: UpdatePanelUI;
        registerPage: RegisterPage;
        registerAppSubPage: RegisterPage;
        registerAppContextualNavIcon: any;
    }
}

export type EchoModuleApi = ModuleApi;

export interface EchoAppModuleApiCreator {
    (meta: ModuleMetaData): EchoModuleApi;
}

export interface AppOptions extends AppLinkOptions {
    layoutKey?: string;
    icon?: string;
    description?: string;
    panels?: Panel[] | Panel;
    extensions?: ExtensionRegistration[];
    panelsOptions?: Partial<EchoPanelOptions>;
    params?: string;
    customHeaderSection?: React.FC;
    exactPath?: boolean;
}

export interface PageOptions {
    layoutKey?: string;
    customHeaderSection?: React.FC;
    exactPath?: boolean;
}

/**
 * The props used by a App component.
 */
export type AppComponentProps<T = unknown, S = unknown> = RouteBaseProps<T, S>;
