import { AvailableDependencies, EchoModuleApi, ModuleMetaData } from './module';

/**
 * The creator function for the App API.
 */
export interface EchoModuleApiCreator {
    (target: ModuleMetaData): EchoModuleApi;
}

export interface ModuleRequester {
    (): Promise<Array<ModuleMetaData>>;
}

export interface AppDependencyGetter {
    (target: ModuleMetaData): AvailableDependencies | undefined | false;
}
export interface AppDependencyFetcher {
    (url: string): Promise<string>;
}
