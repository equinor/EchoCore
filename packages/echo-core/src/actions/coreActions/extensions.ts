import { getCoreContext } from '../../state/globalState';
import { Dict } from '../../types/common';
import { Extension } from '../../types/registry';
import { GlobalState } from '../../types/state';
import { dispatch, readState } from './globalActions';

export function registerExtension(extension: Extension): void {
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
