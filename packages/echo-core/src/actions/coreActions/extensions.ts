import { BaseError } from '@equinor/echo-base';
import { getCoreContext } from '../../state/globalState';
import { UnRegisterExtension } from '../../types/api';
import { GlobalState } from '../../types/state';
import { ExtensionRegistration, ExtensionRegistry } from './../../types/registry/extension.types';
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
 * @throws {BaseError} EchoExtensionKeyAlreadyExistsError: if the supplied extension.key is already in use for this component
 * @returns {UnRegisterExtension} A function to clear the given registration from the core state.
 */
export function registerExtension(extension: ExtensionRegistration): UnRegisterExtension {
    const extendableComponentName = extension.extends;
    dispatch(getCoreContext(), (state: GlobalState) => {
        const updatedExtensionArray = createUpdatedExtensionArray(
            extension,
            state.registry.extensions,
            extendableComponentName
        );

        return {
            ...state,
            registry: {
                ...state.registry,
                extensions: {
                    ...state.registry.extensions,
                    [extendableComponentName]: updatedExtensionArray
                }
            }
        };
    });
    return (): void => {
        unRegisterExtension(extendableComponentName, extension.key);
    };
}

function createUpdatedExtensionArray(
    extensionToRegister: ExtensionRegistration,
    extensionRegistry: ExtensionRegistry,
    extendableComponentName: string
): ExtensionRegistration[] {
    const originalExtensionsArray = extensionRegistry[extendableComponentName] || [];
    let updatedExtensionsArray: ExtensionRegistration[] = originalExtensionsArray;
    const newKeyAlreadyExists = originalExtensionsArray.map((item) => item.key).includes(extensionToRegister.key);

    if (newKeyAlreadyExists) {
        throw new BaseError({
            name: 'EchoExtensionKeyAlreadyExistsError',
            message: `[Echo.Core.RegisterExtension] Duplicate registration with key "${extensionToRegister.key}" for component "${extendableComponentName}": an extension with this key already exists for this component.`,
            innerError: {
                extensionKey: extensionToRegister.key,
                extendableComponentName: extendableComponentName
            }
        });
    } else {
        updatedExtensionsArray = [...originalExtensionsArray, extensionToRegister];
    }

    return updatedExtensionsArray;
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
