import { ModuleSettings } from '../types/registry';
import { useRegistry } from './useRegistry';

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
