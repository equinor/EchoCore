/// <reference types="react" />
import { AccountInfo, PublicClientApplication, RedirectRequest, Configuration, SilentRequest, AuthenticationResult } from '@azure/msal-browser';
import { EchoLocalStorage } from '@equinor/echo-base';
export { default as ArgumentError, default as BaseError, EchoEvents, ErrorProperties, default as NetworkError, default as eventHub, storage } from '@equinor/echo-base';
import React$1, { ComponentType, Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '@microsoft/microsoft-graph-types';
import { Atom } from '@dbeining/react-atom';
import BaseError from '@equinor/echo-base/lib/errors/BaseError';
export { BackendError, ForbiddenError, NotFoundError, ValidationError } from '@equinor/echo-base/lib/errors/network';

interface UserProperties {
    account: AccountInfo | null;
    loginError: boolean;
}

/**
 * Echo Core Authentication provider class for creating providers that provide logout-, login- and getAccessToken-methods.
 * Can be extended if needed
 * Based on the @azure/msal-browser package
 * @param configuration @azure/msal-browser Configuration object used for authentication
 * @param loginRequest Silent request used for login, can be specified if default is not not enough:
 * @var defaultLoginRequest = {
        account: user,
        forceRefresh: false,
        scopes: ['openid', 'profile', 'User.Read', 'offline_access']
    };
 */
declare class AuthenticationProvider {
    userProperties: UserProperties;
    publicClient: PublicClientApplication;
    loginRequest: RedirectRequest;
    isAuthenticated: boolean;
    constructor(configuration: Configuration, loginRequest?: RedirectRequest);
    /**
     * Authentication provider method for handling login
     * Based on the @azure/msal-browser package
     * @param logRequest method for providing log for login authentication outcomes
     */
    handleLogin: (logRequest?: ((...args: unknown[]) => void) | undefined) => Promise<void>;
    /**
     * Authentication provider method that tries to acquire token silently
     * If acquiring token silently is successful, update account and set is authenticated to true
     * If acquiring token silently fails, check if it is because interaction is required and redirect sign in if it is
     * Based on the @azure/msal-browser package
     */
    ssoSilentOrRedirectToAuthenticate: () => Promise<void>;
    /**
     * Authentication provider method that tries to acquire token silently
     * If acquiring token silently is successful, update account and set is authenticated to true
     * If acquiring token silently fails, check if it is because interaction is required and redirect sign in if it is
     * Based on the @azure/msal-browser package
     * @returns authenticationResult stating if authentication was successful or not
     */
    aquireTokenSilentOrRedirectToAuthenticate: (silentRequest: SilentRequest, redirectRequest: RedirectRequest) => Promise<AuthenticationResult | null>;
    /**
     * Authentication provider method for forcing redirect login used when no user is already signed in
     * Based on the @azure/msal-browser package
     */
    login: () => Promise<void>;
    /**
     * Authentication provider method for signing out a user
     * Based on the @azure/msal-browser package
     */
    logout: () => void;
    /**
     * Authentication provider method for getting the users authentication token
     * Based on the @azure/msal-browser package
     * @returns valid access token if request was successful, undefined if not.
     */
    getAccessToken: (silentRequest: SilentRequest) => Promise<string | undefined>;
}

/**
 * Base Client class providing methods for performing a fetch with authentication and acquiring AccessToken.
 * @param authProvider used for fetching token to be used in fetch
 * @getSilentRequest returns the silent request used to perform the action of fetching the authentication provider token
 */
declare class BaseClient {
    private authProvider;
    private getSilentRequest;
    constructor(authProvider: AuthenticationProvider, getSilentRequest: (account: AccountInfo) => SilentRequest);
    /**
     * Function for silently acquiring AccessToken.
     *
     * @return {*}  {(Promise<string | undefined>)}
     * @memberof BaseClient
     */
    getAccessToken(): Promise<string>;
    /**
     * Returns true if user is authenticated
     *
     * @return {*}  {boolean}
     * @memberof BaseClient
     */
    isAuthenticated(): boolean;
    /**
     * Fetch with accessToken from authProvider.
     *
     * @return {*}  {Promise<Response>}
     * @memberof BaseClient
     */
    fetch(url: string, headerOptions?: Record<string, unknown>, method?: string, body?: BodyInit, signal?: AbortSignal): Promise<Response>;
    /**
     * Fetch with specific accessToken.
     *
     * @return {*}  {Promise<Response>}
     * @memberof BaseClient
     */
    fetchWithToken(endpoint: string, token: string, headerOptions?: Record<string, unknown>, method?: string, body?: BodyInit, signal?: AbortSignal): Promise<Response>;
    /**
     * use fetchWithToken instead
     * @deprecated
     */
    fetchFromUrl(url: string, accessToken: string, headerOptions: Record<string, unknown>, method?: string, body?: BodyInit, signal?: AbortSignal): Promise<Response>;
}

/**
 * Echo client extends base client class and uses echo auth provider for fetch
 */
declare class EchoClient extends BaseClient {
    constructor(authProvider: AuthenticationProvider, getSilentRequest: (account: AccountInfo) => SilentRequest);
}

declare type NestedPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<Partial<U>> : T[P] extends {} ? Partial<T[P]> : T[P];
};
/**
 * Dictionary of type generic Type T
 */
declare type Dict<T> = Record<string, T>;
declare type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

/**
 * Possible shapes for a component.
 */
declare type AnyComponent<T> = ComponentType<T>;
declare type WrappedComponent<TProps> = ComponentType<Without<TProps, keyof BaseAppComponentProps>>;
/**
 * The props that every registered App component obtains.
 */
interface RouteBaseProps<UrlParams = unknown, UrlState = unknown> extends RouteComponentProps<UrlParams, {}, UrlState>, BaseAppComponentProps {
}
/**
 * The Base Components Props obtained by avery app.
 */
interface BaseAppComponentProps {
    name?: string;
}

declare enum PanelType {
    left = "left",
    right = "right",
    all = "all"
}
interface Panel {
    panelType: PanelType;
    component: AnyComponent<any>;
    key: string;
    label: string;
    icon: React$1.FC;
}
declare enum ActivePanel {
    AppMenu = "AppMenu",
    ToolMenu = "ToolMenu",
    None = ""
}

interface CoreConfig {
    leftPanel: Panel;
    rightPanel: Panel;
    authProviderLogFunc?: (...args: unknown[]) => void;
}

declare function isDevelopment(): boolean;
declare function isProduction(): boolean;
interface EnvironmentVariables {
    GENERATE_SOURCEMAP: boolean;
    INLINE_RUNTIME_CHUNK: boolean;
    REACT_APP_DEFAULT_CACHE_LOCATION: string;
    REACT_APP_LOGGER_ACTIVE: boolean;
    REACT_APP_API_URL: string;
    REACT_APP_AZURE_AD_TENNANT: string;
    REACT_APP_AZURE_AD_TENNANT_ID: string;
    REACT_APP_AZURE_AD_CLIENT_ID: string;
    REACT_APP_API_CLIENT_ID: string;
    REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY: string;
    REACT_APP_AZURE_BUILD_NUMBER: string;
}
declare function setEnv(environmentVariables: EnvironmentVariables): void;

declare class Env {
    isDevelopment: typeof isDevelopment;
    isProduction: typeof isProduction;
    env: () => EnvironmentVariables;
    setEnv: typeof setEnv;
}

interface LegendOptions {
    isActive: boolean;
    selectedLegendType: string;
}

declare function useLegendOptions(): LegendOptions;

/**
 * Echo Core function for getting the graph user photo url from the echo core state.
 */
declare function useUserPhoto(): string | undefined;

/**
 * Echo Core function for getting the graph user profile from echo core state.
 */
declare function useUserProfile(): User | undefined;

/**
 * Echo core function for updating the legend State.
 * @export Function from Echo Core
 * @param {Partial<LegendOptions>} { isActive: boolean; selectedLegendType: string; }
 */
declare function setLegendOption(legendOptions: Partial<LegendOptions>): void;

/**
 * module registered
 *
 * @export
 * @interface AppModule
 */
interface AppModule {
    name: string;
}
interface EchoApp {
    appKey: string;
    component?: Component;
    panels?: Panel[];
    context: AppContext;
}
declare type AppContext = {};

interface Plant {
    instCode: string;
    description: string;
    sapPlantId: string;
    proCoSysPlantId: string;
}
interface PlantsData {
    plants: Plant[];
    plantsHasError?: boolean;
}

interface Settings {
    showTextHighlighting: boolean;
    plantSettings: PlantSettings;
}
interface PlantSettings {
    instCode: string;
    sapPlantId: string;
    proCoSysPlantId: string;
    plantName: string;
}

/**
 * The props used by a App component.
 */
declare type AppComponentProps<T = unknown, S = unknown> = RouteBaseProps<T, S>;

interface PanelUI {
    panelWrapper?: React.CSSProperties;
    panel?: React.CSSProperties;
    panelButton?: React.CSSProperties;
}
declare type UI = {
    [key: string]: React.CSSProperties | undefined;
};

interface GlobalState {
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
interface GlobalStateContext {
    state: Atom<GlobalState>;
}
declare type EchoCustomState<T> = Partial<T>;
/**
 * The Echo global app sub-state container for registering application components.
 */
interface RegistryState {
    /**
     * The registered app components for the router.
     */
    routes: Dict<RouteRegistration>;
    panels: Dict<Array<Panel>>;
}
interface RouteRegistration extends BaseRegistration {
    component: WrappedComponent<AppComponentProps>;
    meta: AppMetaData;
}
interface BaseRegistration {
    key: string;
}
interface AppMetaData {
    name: string;
    icon: string;
    homeScreen?: boolean;
}
interface ModuleApi {
    registerApp: <Key extends string>(name: Key, Component: AnyComponent<AppComponentProps>, meta?: AppMetaData) => void;
    unRegisterApp: <Key extends string>(name: Key) => void;
    registerPanels: <Key extends string>(key: Key, panels: Panel | Array<Panel>) => void;
    unRegisterPanes: <Key extends string>(key: Key) => void;
}
declare class AppError extends BaseError {
}
/**
 * The Echo global app sub-state container for app information.
 */
interface EchoAppState {
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
declare type LayoutType = 'mobile' | 'tablet' | 'desktop';

interface EchoPanelOptions extends PanelUI {
    searchActive: boolean;
    customPanelActive: string;
    addSearch: boolean;
}
/**
 * Core Action for registering panels
 * @param panels
 * @param options
 */
declare function registerPanels(panels?: Panel[], options?: Partial<EchoPanelOptions>): void;

/**
 * Hook for handling the application module state object.
 * @param initialState The initial state object used for registering.
 * this parameter is default undefined for preventing initialization on every render.
 */
declare function useAppModuleState<T>(initialState?: T | undefined): T;

/**
 * update module State with specific parameter
 * @param key The key of the object to update.
 * @param data The data related to key.
 */
declare function updateSpecificModuleState<T>(key: keyof T, data: T[keyof T]): void;
/**
 * Update module State.
 * @param data The data for updating the module state.
 */
declare function updateModuleState<T>(data: T): void;
/**
 * Readonly for module state
 * @return the current module state.
 */
declare function readModuleState<T>(): Readonly<T>;

/**
 * Hook for running the callback once on umount.
 * @param callback The callback to be invoked on unrounding.
 */
declare function useCleanup(callback: () => void): void;

/**
 * Hook for running the callback once on mount.
 * @param callback The callback to be invoked on mounting.
 */
declare function useInitial(callback: (() => void) | (() => Promise<void>)): void;

interface UsePanels {
    modulePanels: Panel[];
    activePanel: string;
    isPanelActive: boolean;
    setActivePanel: (key: string) => void;
    panelUI: PanelUI;
}
/**
 * Echo Core hook for for handling panels defaults to left panel.
 * @param panelType can be set to `left`, `right` og `all`.
 * @returns {UsePanels} Returns and object `modulePanel`
 * , `setActivePanel`, `activePanel`, `isPanelActive` and `panelUI`.
 */
declare function usePanels(panelType?: string): UsePanels;

declare type ObserverIdentifier = number;
interface ObserverInterface {
    id: ObserverIdentifier;
    callback: Function;
    type: string;
}
declare class ClassObserver {
    private id;
    private observers;
    constructor();
    addSubscriber(callback: Function, type: string): ObserverIdentifier;
    removeSubscriber(id: ObserverIdentifier): void;
    notify<T>(data: T, type: string): void;
}
declare const ObserverClass: typeof ClassObserver;

declare class PanelHandlerClass extends ObserverClass {
    private searchPanel;
    private mainMenu;
    constructor();
    registerCorePanels: (searchPanel: Panel, mainMenu: Panel) => void;
    getCorePanels: (addSearch?: boolean) => Panel[];
    combinePanels: (modulePanels: Panel[], addSearch: boolean, corePanels: (searchActive: boolean) => Panel[]) => Panel[];
}
declare const PanelHandler: PanelHandlerClass;

/**
 * Function for updating plantsData in global state.
 * @export
 * @param {Partial<PlantsData>} partialPlantsData
 */
declare function setPlantsData(partialPlantsData: Partial<PlantsData>): void;
/**
 * Function for getting plantsData from the global state.
 * @export
 * @return {*}  {Readonly<PlantsData>}
 */
declare function getPlantsData(): Readonly<PlantsData>;
/**
 * Function for getting list of plants from the global state.
 * @export
 * @return {*}  {Readonly<Plant[]>}
 */
declare function getPlants(): Readonly<Plant[]>;

/**
 * Hook for returning plantsData from the global state.
 * @export
 * @return {*}  {PlantsData}
 */
declare function usePlantsData(): PlantsData;
/**
 * Hook for returning list of plants from the global state.
 * @export
 * @return {*}  {Plant[]}
 */
declare function usePlants(): Plant[];

declare class PersistEchoSetting {
    private echoStorage;
    private defaultSettings;
    constructor(echoStorage?: EchoLocalStorage, defaultSettings?: Settings);
    /**
     * Persist setting data in LocalStorage for later use.
     * @export
     * @param {Settings} settings
     */
    persistSettingsInLocalStorage(settings: Partial<Settings>): void;
    /**
     * Core function returning application setting from LocalStorage
     * or default settings
     * @export
     * @return {*}  {Settings} localStorage or defaultSettings
     */
    getSettingsFromLocalStorage(): Readonly<Settings>;
    /**
     * Core function returning partial of the global setting from LocalStorage,
     * @export
     * @return {*}  {Partial<Readonly<T>} localStorage or defaultSettings
     */
    getSettingsFormLocalStorageByType<T>(): Partial<Readonly<T>>;
    /**
     * Core function removing all user settings form localStorage
     * @export
     */
    removeAllSettingsFromLocalStorage(): void;
    /**
     * Core function removing user settings form localStorage by key
     * @param {string} key for select setting to remove
     * @export
     */
    removeSettingFromLocalStorageByKey(key: string): void;
}

/**
 * Function used for updating specific settings value in the global state.
 *
 * @export Function Echo Core.
 * @param {K} key is keyof Settings
 * @param {Settings[K]} data associated with the key
 */
declare function updateSettingByKey<K extends keyof Settings>(key: K, data: Settings[K]): void;
/**
 * Function used for updating one or more items in the settings at the global state.
 * @export Function Echo Core.
 * @param {Settings} settings
 */
declare function setSetting(partialSettings: Partial<Settings>): void;
/**
 * Function for getting the settings form the global state.
 * @export Function Echo Core.
 * @return {*}  {Readonly<Settings>}
 */
declare function getSettings(): Readonly<Settings>;
/**
 * Function for returning settings by key form the global state. The return object is Readonly.
 * @export Function from Echo Core
 * @template K is in key of `Settings`
 * @param {K} key
 * @return {*}  {Readonly<Settings[K]>}
 */
declare function getSettingsByKey<K extends keyof Settings>(key: K): Readonly<Settings[K]>;

/**
 * Used for setting or updating the selected plant.
 *
 * @export Function from Echo Core.
 * @param {PlantSettings} plantSettings selected plant data object.
 */
declare function setSelectedPlant(plantSettings: PlantSettings): void;
/**
 * Used from retrieving the selected PlantData.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
declare function getSelectedPlant(): PlantSettings;
/**
 * Used from retrieving the selected instCode.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
declare function getInstCode(): string;
/**
 * Used from retrieving the selected sapPlantId.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
declare function getSapPlantId(): string;
/**
 * Used from retrieving the selected proCoSysPlantId.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */
declare function getProCoSysPlantId(): string;

declare class CoreSettings {
    updateSettingByKey: typeof updateSettingByKey;
    setSetting: typeof setSetting;
    getSettings: typeof getSettings;
    getSettingsByKey: typeof getSettingsByKey;
    /**
     * Plant specific actions to Get and Set Plant date
     * @param {PlantSettings} plantSettings Parameter for both get and set.
     * @memberof CoreSettings
     */
    plant: {
        getSelected: typeof getSelectedPlant;
        setSelected: typeof setSelectedPlant;
    };
    persistSetting: PersistEchoSetting;
}
declare const EchoSettings: CoreSettings;

/**
 * Echo Core hook function for getting the plant settings from echo core state.
 * and function updating the plantSettings.
 * @export Hook fom Echo Core
 * @return {*}  {UsePlantSettings}
 */
declare function usePlantSettings(): PlantSettings;

/**
 * Hook that yields the full global state.
 * Any change to the global state yields the new state.
 */
declare function useGlobalState(): GlobalState;
/**
 * Hook that yields the selected subset of the global state.
 * Only changes to this subset will yield a new state.
 * @param select The subset selection.
 */
declare function useGlobalState<R>(select: (state: GlobalState) => R): R;

/**
 * Util for returning uniq array.
 * @param array of type T
 */
declare function makeUniqBy<T, K extends keyof T>(prop: K, arr: Array<T>): Array<T>;

declare const EchoEnv: Env;
declare class Core {
    useEchoSetup: (config: CoreConfig) => boolean;
    registerPanels: typeof registerPanels;
    useAppModuleState: typeof useAppModuleState;
    useLegendOptions: typeof useLegendOptions;
    useUserProfile: typeof useUserProfile;
    useUserPhoto: typeof useUserPhoto;
    useAuthenticate: (authProvider: AuthenticationProvider, logRequest?: ((...args: unknown[]) => void) | undefined) => boolean;
    setLegendOption: typeof setLegendOption;
    ECHO_CORE_MAIN: string;
    ECHO_CORE_SEARCH: string;
    EchoAuthProvider: AuthenticationProvider;
    EchoClient: EchoClient;
}
declare const EchoCore: Core;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}

export default EchoCore;
export { ActivePanel, AppError, AppMetaData, AppModule, AuthenticationProvider, BaseClient, BaseRegistration, Core, Dict, EchoApp, EchoAppState, EchoCustomState, EchoEnv, EchoSettings, GlobalState, GlobalStateContext, LayoutType, LegendOptions, ModuleApi, NestedPartial, ObserverClass, ObserverIdentifier, ObserverInterface, Panel, PanelHandler, PanelType, PanelUI, Plant, PlantSettings, PlantsData, RegistryState, RouteRegistration, Settings, UI, UserProperties, Without, getInstCode, getPlants, getPlantsData, getProCoSysPlantId, getSapPlantId, getSelectedPlant, makeUniqBy, readModuleState, setPlantsData, setSelectedPlant, updateModuleState, updateSpecificModuleState, useAppModuleState, useCleanup, useGlobalState, useInitial, usePanels, usePlantSettings, usePlants, usePlantsData };
