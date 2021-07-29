import { getCoreContext } from '../../state/globalState';
import { ContextProvider } from '../../types/context';
import { GlobalState } from '../../types/state';
import { dispatch, readState } from './globalActions';

/**
 * Function for registering the context for the active module.
 * Context provider will persist until new context provider is registered.
 *
 * @export
 * @param {(ContextProvider | undefined)} contextProvider
 */
export function registerEchoModuleContextProvider(contextProvider: ContextProvider | undefined): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, contextProvider }));
}

/**
 * Function for getting the moduleContext provider form the global state.
 *
 * @export
 * @return {*}  {(ContextProvider | undefined)}
 */
export function getContextProvider(): ContextProvider | undefined {
    return readState(getCoreContext(), (state: GlobalState) => state.contextProvider);
}
