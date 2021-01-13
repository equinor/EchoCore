import { setModuleState } from '../actions/globalStateActions';

/**
 * Echo Core Function for updating moduleState by key.
 * @param state Module state defined by module creator.
 * @param key to update.
 * @param data provided to update given key.
 *
 * `For use in Echo Core only.`
 */
function setSpecificModuleState<S, T, K extends keyof T>(state: S, key: K, data: T[K]): void {
    const newState = { ...state, [key]: data };
    setModuleState<S>(newState);
}

export default setSpecificModuleState;
