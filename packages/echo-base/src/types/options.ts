import { AppApiCreator, ModuleRequester } from './creators';
import { EchoModule } from './module';

export interface LoadingModuleOptions {
    createApi: AppApiCreator;
    fetchModules: ModuleRequester;
    modules: EchoModule[];
}
