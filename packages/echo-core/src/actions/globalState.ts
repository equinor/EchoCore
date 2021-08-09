import { getCoreContext } from '../state/globalState';
import { GlobalState } from '../types';
import { dispatch } from './coreActions/globalActions';

/**
 * Function Used for updating the modules global state.
 * @param moduleState Kan be any type of data, The module can provide its own state.
 * This state will be over written when new module is mounted.
 */
export function setModuleState<T>(moduleState: T): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, moduleState }));
}
