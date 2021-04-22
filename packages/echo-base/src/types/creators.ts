import { AppMetaData, AppModuleApi, AvailableDependencies } from './module';

/**
 * The creator function for the App API.
 */
export interface AppApiCreator {
    (target: AppMetaData): AppModuleApi;
}

export interface ModuleRequester {
    (): Promise<Array<AppMetaData>>;
}

export interface AppDependencyGetter {
    (target: AppMetaData): AvailableDependencies | undefined | false;
}
