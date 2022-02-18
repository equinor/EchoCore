import { ExtensionRegistration } from '../types/registry/extension.types';
import { useRegistry } from './useRegistry';

/**
 * Get all the registered extensions for a given component.
 *
 * @param {string} componentName
 * @returns {ExtensionRegistration[]}
 */
export function useExtensionsByComponentName(componentName: string): ExtensionRegistration[] {
    const { extensions } = useRegistry();

    if (!extensions[componentName]) {
        console.warn(`[EchoCore.Extensions]: no registered extensions for component name ${componentName}.`);
        return [];
    } else {
        return extensions[componentName];
    }
}
