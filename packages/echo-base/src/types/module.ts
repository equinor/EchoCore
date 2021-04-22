import { EchoModuleApiCreator } from './creators';
import { EchoEventHub as EchoEventHub } from './event';

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

export type EchoModuleData = ModuleData | MultiModuleData;
/**
 * Describes the metadata transported by a Apps.
 */
export type AppMetaData = SingleAppMetadata | MultiAppsMetadata;

/**
 * The metadata for a single app.
 */
export type SingleModule = ModuleData & AppMetaData;

/**
 * The metadata for apps containing apps.
 */
export type MultiModule = MultiModuleData & MultiAppsMetadata;

/**
 * Defines the API accessible from Apps.
 */
export interface EchoModuleApi {
    /**
     * Gets the metadata of the current App.
     */
    meta: AppMetaData;
    eventHub: EchoEventHub;
}

export interface RouteRegistration extends BaseRegistration {
    meta: AppMetaData;
}

export interface BaseRegistration {
    key: string;
}

export interface ModuleData {
    setup: (api: EchoModuleApi) => void | Promise<void>;
}
export interface MultiModuleData {
    setup: (apiFactory: EchoModuleApiCreator) => void | Promise<void>;
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
