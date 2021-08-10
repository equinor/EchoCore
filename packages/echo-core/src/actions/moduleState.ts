import { setSpecificModuleState } from '../state/globalAppState';
import { getCoreContext } from '../state/globalState';
import { GlobalState } from '../types/state';
import { dispatch, readState } from './coreActions/globalActions';

/**
 * update module State with specific parameter
 * @param key The key of the object to update.
 * @param data The data related to key.
 */
export function updateSpecificModuleState<T>(key: keyof T, data: T[keyof T]): void {
    setSpecificModuleState(readModuleState() as T, key, data);
}
/**
 * Update module State.
 * @param newState The data for updating the module state.
 */
export function updateModuleState<T>(newState: Partial<T> | ((state: T) => T)): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({
        ...state,
        moduleState: {
            ...state.moduleState,
            ...(typeof newState === 'function' ? newState(state.moduleState as T) : newState)
        }
    }));
}

/**
 * Readonly for module state
 * @return the current module state.
 */
export function readModuleState<T>(): Readonly<T> {
    return readState(getCoreContext(), (state) => {
        return { ...state.moduleState } as Readonly<T>;
    });
}
