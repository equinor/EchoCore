import { Dict } from '../types/common';
import { Extension, ExtensionType } from '../types/registry';
import { useRegistry } from './useRegistry';

interface ExtensionOptions {
    key?: string;
    extensionTag?: string;
}

/**
 * Get an extension by using the key/identifier from a list of extensions
 *
 * @param key
 * @param extensions
 * @returns
 */
function getExtensionByKey(key: string, extensions: Dict<Extension>): Extension[] {
    const extension = extensions[key];
    if (!extension) {
        console.warn(`Key ${key} does not exist in extensions `);
        return [];
    } else {
        return [extension];
    }
}

/**
 * Get an extension by tag from a list of extensions. A tag is used like a keyword
 *
 * @param extensionTag
 * @param extensionsList
 * @returns
 */
function getExtensionByTag(extensionTag: string, extensionsList: Extension[]): Extension[] {
    return extensionsList.filter((ex) => {
        if (ex.extensionTag && extensionTag) {
            if (typeof ex.extensionTag === 'string') {
                return ex.extensionTag === extensionTag;
            } else {
                return ex.extensionTag.includes(extensionTag);
            }
        }
    });
}

/**
 * Hook for using extensions by passing a type and options (key or tags)
 * Example: Show all notification types with a tag of "tag" as in stid tag.
 *
 * @param type
 * @param options
 * @returns
 */
export function useExtensions(type: ExtensionType, options?: ExtensionOptions): Extension[] {
    const { extensions } = useRegistry();
    const extensionsList = Object.keys(extensions)
        .map((objectKey: string) => (extensions[objectKey].type === type ? extensions[objectKey] : undefined))
        .filter((o) => o !== undefined) as Extension[];

    if (options && options.key) {
        return getExtensionByKey(options.key, extensions);
    }

    if (options && options.extensionTag) {
        return getExtensionByTag(options.extensionTag, extensionsList);
    }

    return extensionsList;
}
