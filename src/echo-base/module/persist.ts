import { EquinorModuleMeta } from './types';

export function persistLocalModuleMeta(key: string, modules: EquinorModuleMeta[]): void {
    storage.setItem(key, modules);
}

export function loadLocalModuleMeta(key: string): EquinorModuleMeta[] {
    const localModules: EquinorModuleMeta[] | undefined | string = storage.getItem(key);
    if (!localModules || !(localModules instanceof Array)) {
        return [];
    }
    return localModules;
}
