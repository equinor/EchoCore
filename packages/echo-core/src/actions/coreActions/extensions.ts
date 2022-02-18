import { getCoreContext } from '../../state/globalState';
import { UnRegisterExtension } from '../../types/api';
import { GlobalState } from '../../types/state';
import { ExtensionRegistration } from './../../types/registry/extension.types';
import { dispatch } from './globalActions';

/**
 * Core Action for registering an extension.
 * Extensions always tie to a specific component in echopedia: with these, it is possible
 * to augment and extend pre-defined, existing components in the echopediaWeb main app.
 * @param extension The extension to register;
 * @param {string} extension.key  Unique key to identify the extension.
 * @param {string} extension.extends The name of the component that would use this extension.
 * @param {React.FC} extension.component The React component to be used by the extended component
 * @param {callback} extension.isVisible May be used by the extended component: if the given extension should be rendered or not.
 * @param {Record<string, unknown>} extension.options May be used by the extended component: additional, custom options to use,
 * if needed by the extendable component
 * @returns {UnRegisterExtension} A function to clear the given registration from the core state.
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

/**
 * Register multiple extensions.
 * Extensions always tie to a specific component in echopedia: with these, it is possible
 * to augment and extend pre-defined, existing components in the echopediaWeb main app.
 * @param {ExtensionRegistration[]} extensions The extensions to register;
 * @param {string} extension.key  Unique key to identify the extension.
 * @param {string} extension.extends The name of the component that would use this extension.
 * @param {React.FC} extension.component The React component to be used by the extended component
 * @param {callback} extension.isVisible May be used by the extended component: if the given extension should be rendered or not.
 * @param {Record<string, unknown>} extension.options May be used by the extended component: additional, custom options to use,
 * if needed by the extendable component
 * @returns {UnRegisterExtension[]} An array of functions to clear the given registration from the core state.
 */
export function registerMultipleExtensions(extensions: ExtensionRegistration[] = []): UnRegisterExtension[] {
    const unregisterFunctions: UnRegisterExtension[] = [];
    extensions.forEach((extensionRegistration) => {
        unregisterFunctions.push(registerExtension(extensionRegistration));
    });

    return unregisterFunctions;
}

/**
 * Core Action for unRegistering an extension.
 * Key is used as an identifier for removal.
 *
 * @param {string} key
 */
function unRegisterExtension(componentName: string, extensionKey: string): void {
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
