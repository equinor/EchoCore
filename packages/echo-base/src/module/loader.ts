import { LoaderConfig } from '../types/loader';
import { App, AppData, AppMetadata } from '../types/module';

export function loadModule(meta: AppMetadata, loadModuleData: (meta: AppMetadata) => AppData): App {
    const module = loadModuleData(meta);
    return { ...meta, ...module };
}


export function loader(
    getDependencies: ()=> Record<string, any>,
    options: LoaderConfig
) {
    return  
}