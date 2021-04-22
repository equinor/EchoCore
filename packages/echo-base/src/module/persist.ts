import { AppMetaData } from '../types/module';
import { storage } from '../utils/storage';

export function persistLocalModuleMeta(key: string, modules: AppMetaData[]): void {
    storage.setItem(key, modules);
}

export function loadLocalModuleMeta(key: string): AppMetaData[] {
    const localModules: AppMetaData[] | undefined | string = storage.getItem(key);
    if (!localModules || !(localModules instanceof Array)) {
        return [];
    }
    return localModules;
}
