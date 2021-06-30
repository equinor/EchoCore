import { BaseError } from '../errors';
import { EchoModule, ModuleMetaData } from './module';

export class ModuleAppError extends BaseError {}
/**
 * Configuration options for the default loader.
 */
export interface LoaderConfig {
    crossOrigin?: string;
}

export interface ModulesLoader {
    (): Array<EchoModule>;
}

export interface EchoModuleLoaded {
    (error: ModuleAppError | undefined, modules: Array<EchoModule>): void;
}

export interface EchoModulesLoading {
    (error: ModuleAppError | undefined, modules: Array<EchoModule>, loaded: boolean): void;
}
export interface ModuleLoader {
    (meta: ModuleMetaData): Promise<EchoModule>;
}

export interface DefaultLoaderConfig {
    crossOrigin?: string;
}
