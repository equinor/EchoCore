import { getCoreContext } from '../../state/globalState';
import { UnRegisterExtension } from '../../types/api';
import { ExtendableComponentName } from '../../types/registry/extension.types';
import { GlobalState } from '../../types/state';
import { ExtensionRegistration } from './../../types/registry/extension.types';
import { dispatch } from './globalActions';

/**
 * Core Action for registering an extension.
 * Key is used as an identifier
 *
 * @export
 * @param extension
 */
export function registerExtension(extension: ExtensionRegistration): UnRegisterExtension {
    const extendableComponentName = extension.extends;
    dispatch(getCoreContext(), (state: GlobalState) => {
        const originalExtensionsArray = state.registry.extensions[extendableComponentName] || [];
        return {
            ...state,
            registry: {
                ...state.registry,
                extensions: {
                    ...state.registry.extensions,
                    [extendableComponentName]: [...originalExtensionsArray, extension]
                }
            }
        };
    });
    return (): void => {
        unRegisterExtension(extendableComponentName, extension.key);
    };
}

export function registerMultipleExtensions(extensions: ExtensionRegistration[]): void {
    extensions.forEach((extensionRegistration) => {
        registerExtension(extensionRegistration);
    });
}

/**
 * Core Action for unRegistering an extension.
 * Key is used as an identifier for removal.
 *
 * @param {string} key
 */
function unRegisterExtension(componentName: ExtendableComponentName, extensionKey: string): void {
    dispatch(getCoreContext(), (state: GlobalState) => {
        const originalExtensionsArray = state.registry.extensions[componentName] || [];
        const updatedExtensionArray = originalExtensionsArray.filter((item) => item.key !== extensionKey);
        return {
            ...state,
            registry: {
                ...state.registry,
                extensions: {
                    ...state.registry.extensions,
                    [componentName]: updatedExtensionArray
                }
            }
        };
    });
}
