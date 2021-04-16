import { AppMetadata } from '../types/module';
import { storage } from '../utils/storage';

export function persistLocalModuleMeta(key: string, modules: AppMetadata[]): void {
    storage.setItem(key, modules);
}

export function loadLocalModuleMeta(key: string): AppMetadata[] {
    const localModules: AppMetadata[] | undefined | string = storage.getItem(key);
    if (!localModules || !(localModules instanceof Array)) {
        return [];
    }
    return localModules;
}
