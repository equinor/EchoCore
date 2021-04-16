import { getCoreContext } from '../state/globalState';
import { AppError, AppModule, GlobalState } from '../types';
import { dispatch } from './globalActions';

/**
 * Function Used for updating the modules global state.
 * @param moduleState Kan be any type of data, The module can provide its own state.
 * This state wil be over written when new module is mounted.
 */
export function setModuleState<T>(moduleState: T): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, moduleState }));
}

/**
 *
 *
 * @export
 * @param {boolean} loading
 * @param {(AppError | undefined)} error
 * @param {AppModule[]} modules
 */
export function initializeModules(loading: boolean, error: AppError | undefined, modules: AppModule[]): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, app: { ...state.app, loading, error }, modules }));
}
