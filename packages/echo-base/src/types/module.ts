import { ModuleEventEmitter } from './event';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SingleAppMetadata {
    name: string;
    link: string;
    requireRef: string;
    integrity?: string;
    custom?: any;
    config?: Record<string, any>;
}
export interface MultiAppsMetadata {
    name: string;
    link: string;
    bundle: string;
    integrity?: string;
    custom?: any;
}

export type AppModule = SingleAppModule | MultiAppModule;
/**
 * Describes the metadata transported by a Apps.
 */
export type AppMetadata = SingleAppMetadata | MultiAppsMetadata;

/**
 * The metadata for a single app.
 */
export type SingleAppModule = AppData & AppMetadata;

/**
 * The metadata for apps containing apps.
 */
export type MultiAppModule = MultiAppData & MultiAppsMetadata;

/**
 * Defines the API accessible from Apps.
 */
export interface AppModuleApi extends ModuleEventEmitter {
    /**
     * Gets the metadata of the current App.
     */
    meta: AppMetadata;
}

export interface RouteRegistration extends BaseRegistration {
    meta: AppMetaData;
}

export interface AppMetaData {
    name: string;
    icon: string;
    homeScreen?: boolean;
}

export interface BaseRegistration {
    key: string;
}

export interface AppData {
    setup: (api: AppModuleApi) => void | Promise<void>;
}
export interface MultiAppData {
    setup: (apiFactory: AppApiCreator) => void | Promise<void>;
}

export interface EchoPortal {
    isAuthenticated: boolean;
}

export type AppMetaFetch = () => Promise<AppMetadata[]>;

/**
 * The creator function for the App API.
 */
export interface AppApiCreator {
    (target: AppMetadata): AppModuleApi;
}

/**
 * The record containing all available dependencies.
 */
export interface AvailableDependencies {
    [name: string]: any;
}
