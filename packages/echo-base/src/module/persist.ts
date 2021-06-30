import { ModuleMetaData } from '../types/module';
import { storage } from '../utils/storage';

export function persistLocalModuleMeta(key: string, modules: ModuleMetaData[]): void {
    storage.setItem(key, modules);
}

export function loadLocalModuleMeta(key: string): ModuleMetaData[] {
    const localModules: ModuleMetaData[] | undefined | string = storage.getItem(key);
    if (!localModules || !(localModules instanceof Array)) {
        return [];
    }
    return localModules;
}
