import { EchoModuleApi as ModuleApi, ModuleMetaData } from '@equinor/echo-base';
import { RegisterAppOptions } from '../actions/coreActions/app';
import { AppKey, EchoPanelOptions, Panel, PanelUI } from './';
import { RouteBaseProps, WrappedComponent } from './components';
import { AppLinkOptions } from './registry';

type RegisterApp = (appComponent: WrappedComponent<AppComponentProps>, options?: AppOptions) => void;
type UnRegisterApp = (key: string) => void;
type RegisterPanels = (key: string, panels: Panel[], options?: Partial<EchoPanelOptions>) => void;
type RegisterAppWithKey = (key: string, options: RegisterAppOptions) => void;
type UnRegisterPanels = (key: string) => void;
type UpdatePanelUI = (ui?: PanelUI, key?: string) => void;
type RegisterPage = (path: string, component: React.FC, options?: PageOptions) => void;
type UnRegisterPage = (appKey: AppKey) => void;
declare module '@equinor/echo-base' {
    /**
     *  Api for handling all registration of app, links and panels
     *
     * @interface EchoModuleApi
     */
    interface EchoModuleApi {
        /**
         * Used for registration of the main application in a module,
         * based on the modules manifest, this wil provide app on path specified in manifest and link to application,
         * the optional options parameter can help wit configuring the application.
         *
         * To add application panel this can be done with the AppOptions
         *
         * @param {WrappedComponent<AppComponentProps>} component
         * @param {AppOptions} [options={}]
         */
        registerApp: RegisterApp;
        /**
         *
         *
         * @export
         * @param {string} key
         * @param {RegisterAppOptions} options
         */
        registerAppWithKey: RegisterAppWithKey;
        /**
         * Used for unRegistration of the main application in a module,
         *
         * @export
         * @param {string} key
         */
        unRegisterApp: UnRegisterApp;
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
         */
        registerPanels: RegisterPanels;
        /**
         * Removes the panel registered on provided key
         *
         * @export
         * @template TKey
         * @param {TKey} key
         * @param {(Panel | Array<Panel>)} panels
         */
        unRegisterPanels: UnRegisterPanels;
        updatePanelUI: UpdatePanelUI;
        registerPage: RegisterPage;
        unRegisterPage: UnRegisterPage;
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
    panelsOptions?: Partial<EchoPanelOptions>;
}

export interface PageOptions {
    layoutKey?: string;
}

/**
 * The props used by a App component.
 */
export type AppComponentProps<T = unknown, S = unknown> = RouteBaseProps<T, S>;
