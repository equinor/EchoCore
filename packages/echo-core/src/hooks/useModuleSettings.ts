import { ModuleSettings } from '../types/registry';
import { useRegistry } from './useRegistry';

/**
 * Hook for using module settings, with a key, returns modulesettings
 * for this key or empty array.
 *
 * @param key
 * @returns
 */
export function useModuleSettings(key?: string): ModuleSettings[] {
    const { moduleSettings } = useRegistry();

    if (key) {
        const moduleSetting = moduleSettings[key];
        if (!moduleSetting) {
            console.warn(`Key ${key} does not exist in module settings `);
            return [];
        } else {
            return [moduleSetting];
        }
    }

    return Object.keys(moduleSettings).map((objectKey: string) => moduleSettings[objectKey]);
}
