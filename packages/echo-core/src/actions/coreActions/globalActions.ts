import { GlobalState, GlobalStateContext } from '../../types';

/**
 * Echo Core Action for updating the globalState
 * @param ctx use `getGlobalContest` for ctx
 * @param update callback function for updating the state.
 */
export function dispatch(ctx: GlobalStateContext, update: (state: GlobalState) => GlobalState): void {
    ctx.state.setState((state) => update(state));
}

/**
 * Echo Core Action for reading the globalState
 * @param ctx use `getGlobalContest` for ctx
 * @param read callback function for reading state parameters.
 */
export function readState<S>(ctx: GlobalStateContext, read: (state: GlobalState) => S): S {
    const state = ctx.state.getState();
    return read(state);
}
