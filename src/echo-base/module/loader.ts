import { App, AppData, AppMetadata } from '../types/module';

export function loadModule(meta: AppMetadata, loadModuleData: (meta: AppMetadata) => AppData): App {
    const module = loadModuleData(meta);
    return { ...meta, ...module };
}

export function loader(meta: AppMetadata): AppData {
    // implement
    console.log(meta);
    return {
        setup: (): void => {
            // Empty Setup
        }
    };
}
