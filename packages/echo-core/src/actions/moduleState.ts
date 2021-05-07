import { setSpecificModuleState } from '../state/globalAppState';
import { getCoreContext } from '../state/globalState';
import { readState } from './coreActions/globalActions';
import { setModuleState } from './globalState';

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
 * @param data The data for updating the module state.
 */
export function updateModuleState<T>(data: T): void {
    setModuleState(data);
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
