import { AppMetaData, AvailableDependencies, EchoModuleApi } from './module';

/**
 * The creator function for the App API.
 */
export interface EchoModuleApiCreator {
    (target: AppMetaData): EchoModuleApi;
}

export interface ModuleRequester {
    (): Promise<Array<AppMetaData>>;
}

export interface AppDependencyGetter {
    (target: AppMetaData): AvailableDependencies | undefined | false;
}
export interface AppDependencyFetcher {
    (url: string): Promise<string>;
}
