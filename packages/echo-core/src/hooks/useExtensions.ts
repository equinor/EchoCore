import { Dict } from '../types/common';
import { Extension, ExtensionType } from '../types/registry';
import { useRegistry } from './useRegistry';

interface ExtensionsOptions {
    key?: string;
    extensionTag?: string;
}

function getExtensionByKey(key: string, extensions: Dict<Extension>): Extension[] {
    const extension = extensions[key];
    if (!extension) {
        console.warn(`Key ${key} does not exist in extensions `);
        return [];
    } else {
        return [extension];
    }
}

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

export function useExtensions(type: ExtensionType, options?: ExtensionsOptions): Extension[] {
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
