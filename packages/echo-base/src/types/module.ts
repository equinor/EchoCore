import { AppApiCreator } from './creators';
import { ModuleEventEmitter } from './event';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SingleAppMetadata extends MetaDataBase {
    requireRef: string;
    config?: Record<string, any>;
}
export interface MultiAppsMetadata extends MetaDataBase {
    bundle?: string;
}

export interface MetaDataBase {
    name: string;
    link: string;
    hash: string;
    version: string;
    integrity?: string;
    custom?: any;
}

export type EchoModule = SingleModule | MultiModule;

export type AppModuleData = AppData | MultiAppData;
/**
 * Describes the metadata transported by a Apps.
 */
export type AppMetaData = SingleAppMetadata | MultiAppsMetadata;

/**
 * The metadata for a single app.
 */
export type SingleModule = AppData & AppMetaData;

/**
 * The metadata for apps containing apps.
 */
export type MultiModule = MultiAppData & MultiAppsMetadata;

/**
 * Defines the API accessible from Apps.
 */
export interface AppModuleApi extends ModuleEventEmitter {
    /**
     * Gets the metadata of the current App.
     */
    meta: AppMetaData;
}

export interface RouteRegistration extends BaseRegistration {
    meta: AppMetaData;
}

// export interface AppMetaData {
//     name: string;
//     icon: string;
//     homeScreen?: boolean;
// }

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

export type AppMetaFetch = () => Promise<AppMetaData[]>;

/**
 * The record containing all available dependencies.
 */
export interface AvailableDependencies {
    [name: string]: any;
}
