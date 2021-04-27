import { EchoModuleApiCreator } from './creators';
import { EchoEventHub as EchoEventHub } from './event';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SingleModuleMetadata extends MetaDataBase {
    requireRef: string;
    config?: Record<string, any>;
}
export interface MultiModuleMetadata extends MetaDataBase {
    bundle?: string;
}

export interface MetaDataBase {
    key: string;
    name: string;
    shortName: string;
    fileUri: string;
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
export type AppMetaData = SingleModuleMetadata | MultiModuleMetadata;

/**
 * The metadata for a single app.
 */
export type SingleModule = ModuleData & SingleModuleMetadata;

/**
 * The metadata for apps containing apps.
 */
export type MultiModule = MultiModuleData & MultiModuleMetadata;

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
