import { AppDependencyGetter, EchoModuleApiCreator, ModuleRequester } from './creators';
import { DefaultLoaderConfig } from './loader';
import { AvailableDependencies, EchoModule } from './module';

export interface LoadingModuleOptions {
    createApi: EchoModuleApiCreator;
    fetchModules: ModuleRequester;
    modules?: EchoModule[];
    dependencies?: AvailableDependencies;
    getDependencies?: AppDependencyGetter;
    config?: DefaultLoaderConfig;
}
