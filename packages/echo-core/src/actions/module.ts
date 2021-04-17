import { getCoreContext } from '../state/globalState';
import { AppModule } from '../types/modules';
import { GlobalState, ModuleAppError } from '../types/state';
import { dispatch } from './globalActions';

/**
 *
 *
 * @export
 * @param {boolean} loading
 * @param {(ModuleAppError | undefined)} error
 * @param {AppModule[]} modules
 */
export function initializeModules(loading: boolean, error: ModuleAppError | undefined, modules: AppModule[]): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, app: { ...state.app, loading, error }, modules }));
}
