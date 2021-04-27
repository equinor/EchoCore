import { EchoEventHub as EchoEventHub } from './event';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ModuleMetaData extends MetaDataBase {
    requireRef?: string;
    config?: Record<string, any>;
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

/**
 * The metadata for a single app.
 */
export type EchoModule = ModuleData & ModuleMetaData;

/**
 * Defines the API accessible from Apps.
 */
export interface EchoModuleApi {
    /**
     * Gets the metadata of the current App.
     */
    meta: ModuleMetaData;
    eventHub: EchoEventHub;
}

export interface ModuleData {
    setup: (api: EchoModuleApi) => void | Promise<void>;
}

export type AppMetaFetch = () => Promise<ModuleMetaData[]>;

/**
 * The record containing all available dependencies.
 */
export interface AvailableDependencies {
    [name: string]: any;
}
