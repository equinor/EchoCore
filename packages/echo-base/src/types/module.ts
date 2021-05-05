import { EchoEventHub } from './event';

export interface ModuleMetaData extends MetaDataBase {
    requireRef?: string;
}
export interface MetaDataBase {
    key: string;
    name: string;
    shortName: string;
    path: string;
    fileUri: string;
    version: string;
    integrity?: string;
    private?: boolean;
}

/**
 *  Echo Module setup function and meta data combined.
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
