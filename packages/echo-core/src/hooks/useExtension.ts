import { ExtendableComponentName, ExtensionRegistration } from '../types/registry/extension.types';
import { useRegistry } from './useRegistry';

/**
 * Hook for using extensions by passing a type and options (key or tags)
 * Example: Show all notification types with a tag of "tag" as in stid tag.
 *
 * @param type
 * @param options
 * @returns
 */
export function useExtensionsByComponentName(componentName: ExtendableComponentName): ExtensionRegistration[] {
    const { extensions } = useRegistry();

    return extensions[componentName];
}
