import { AppApiCreator, AppDependencyGetter, ModuleRequester } from './creators';
import { DefaultLoaderConfig } from './loader';
import { AvailableDependencies, EchoModule } from './module';

export interface LoadingModuleOptions {
    createApi: AppApiCreator;
    fetchModules: ModuleRequester;
    modules?: EchoModule[];
    dependencies?: AvailableDependencies;
    getDependencies?: AppDependencyGetter;
    config?: DefaultLoaderConfig;
}
