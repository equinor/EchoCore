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
type RegisterContextualAppLink = (args: RegisterContextualAppLinkArg) => void;
type RegisterExtension = (args: ExtensionRegistration) => UnRegisterExtension;

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
        /**
         * Register a link to the given Echo App in EchopediaWeb's application links component,
         * to open a given tag with it.
         *
         * @param {RegisterContextualAppLinkArg} options
         * @param {React.FC<any>} options.component React component to be used by the extended component. If this is passed the `iconName` and `label` params can be omitted.
         * If you don't pass a component, use iconName and label params to render a built in, simple icon button. It will navigate to your EchoModule's link passing Tag id, and plant inst code.
         * @param {string} options.iconName Use this together with `label` param: EDS icon name for a simple, built in icon-button.
         * @param {string} options.label Use this together with `iconName` param: A label to show on the App Link's icon button hover.
         * @param {(...args) => boolean} options.isVisible Optional function to determine when the icon button should be visible. Get's all props passed to the App Link component.
         */
        registerContextualAppLink: RegisterContextualAppLink;
        /**
         * Core Action for registering an extension.
         * Extensions always tie to a specific component in echopedia: with these, it is possible
         * to augment and extend pre-defined, existing components in the echopediaWeb main app.
         *
         * To get all extensions for a given component, use the useExtensions() hook.
         *
         * @param extension The extension to register;
         * @param {string} extension.key  Unique key to identify the extension.
         * @param {string} extension.extends The registered name of the component that would use this extension.
         * @param {React.FC} extension.component React component to be used by the extended component
         * @param {callback} extension.isVisible May be used by the extended component: if the given extension should be rendered or not.
         * @param {Record<string, unknown>} extension.options May be used by the extended component: additional, custom options to use,
         * if needed by the extendable component
         * @returns {UnRegisterExtension} A function to clear the given registration from the core state.
         */
        registerExtension: RegisterExtension;
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

type RegisterContextualAppLinkArg = ContextualAppLinkComponentArg | ContextualAppLinkArg;

interface ContextualAppLinkComponentArg extends RegisterContextualAppLinkBaseArg {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.FC<any>;
    label?: never;
    iconName?: never;
}

interface ContextualAppLinkArg extends RegisterContextualAppLinkBaseArg {
    component?: never;
    iconName: string;
    label: string;
}

interface RegisterContextualAppLinkBaseArg {
    isVisible?: (...args) => boolean;
}
