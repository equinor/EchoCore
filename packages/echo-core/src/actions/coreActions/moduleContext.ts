import { getCoreContext } from '../../state/globalState';
import { ContextProvider } from '../../types/context';
import { GlobalState } from '../../types/state';
import { dispatch } from './globalActions';

/**
 * Function for registering the context for the active module.
 * Context provider will persist until new context provider is registered.
 *
 * @export
 * @param {ContextProvider} contextProvider
 */
export function registerEchoModuleContextProvider(contextProvider: ContextProvider): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, contextProvider }));
}
