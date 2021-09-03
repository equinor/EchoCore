import { getCoreContext } from '../../state/globalState';
import { UnRegisterExtensions } from '../../types/api';
import { Dict } from '../../types/common';
import { Extension } from '../../types/registry';
import { GlobalState } from '../../types/state';
import { removeWithKey } from '../../utils/state';
import { dispatch, readState } from './globalActions';

/**
 * Core Action for registering an extension.
 * Key is used as an identifier
 *
 * @export
 * @param extension
 */
export function registerExtension(extension: Extension): UnRegisterExtensions {
    dispatch(getCoreContext(), (state: GlobalState) => ({
        ...state,
        registry: {
            ...state.registry,
            extensions: {
                ...state.registry.extensions,
                ...verifyKey(state.registry.extensions, extension)
            }
        }
    }));
    return (): void => {
        unRegisterExtension(extension.key);
    };
}

/**
 * Core Action for unRegistering an extension.
 * Key is used as an identifier for removal.
 *
 * @param {string} key
 */
function unRegisterExtension(key: string): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({
        ...state,
        registry: {
            ...state.registry,
            extensions: removeWithKey(state.registry.extensions, key)
        }
    }));
}

interface VerifyKey {
    key: string;
}

export function verifyKey<T extends VerifyKey>(state: Dict<T>, item: T): Dict<T> {
    if (Object.keys(state).includes(item.key)) {
        throw new Error(`Key ${item.key} is already defined`);
    } else {
        return {
            [item.key]: item
        };
    }
}

export function readExtensions(): Readonly<Dict<Extension>> {
    return readState(getCoreContext(), (state) => {
        return state.registry.extensions;
    });
}
