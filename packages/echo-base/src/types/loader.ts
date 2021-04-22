import { AppMetaData, EchoModule } from './module';

/**
 * Configuration options for the default loader.
 */
export interface LoaderConfig {
    crossOrigin?: string;
}

export interface ModulesLoader {
    (): Array<EchoModule>;
}

export interface AppModuleLoaded {
    (error: Error | undefined, modules: Array<EchoModule>): void;
}

export interface AppModulesLoading {
    (error: Error | undefined, pilets: Array<EchoModule>, loaded: boolean): void;
}
export interface ModuleLoader {
    (meta: AppMetaData): Promise<EchoModule>;
}

export interface DefaultLoaderConfig {
    crossOrigin?: string;
}
