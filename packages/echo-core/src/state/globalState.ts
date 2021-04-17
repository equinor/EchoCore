import { Atom } from '@dbeining/react-atom';
import { GlobalState, GlobalStateContext } from '../types';
import { GlobalsStateActions } from '../types/actions';
import defaultGlobalState from './defaultStates';

/**
 * Echo Core function for creating the GlobalState object.
 * @returns Atom<GlobalState>
 * Too read this state use getCoreContext
 *
 * `Echo Core only`
 */
export function createGlobalState(defaultState: GlobalState): Atom<GlobalState> {
    return Atom.of(defaultState);
}

/**
 * Echo Core function for creating the GlobalApplicationContext.
 * @param state use with createGlobalState function.
 * This will provides all necessary functions for Echo Core
 *
 * `Echo Core only.`
 */
export function createGlobalApplicationContext(state: Atom<GlobalState>): GlobalStateContext {
    const ctx: GlobalStateContext = {
        state,
        actions: {} as GlobalsStateActions
        // Todo update with httpApi, authentication and more...
    };
    return ctx;
}

/**
 * Echo CoreContext created the the createGlobalApplicationContext
 * providing GlobalState  and core application functionality
 *
 * `Echo Core only.`
 */
export const CoreContext = createGlobalApplicationContext(createGlobalState(defaultGlobalState));

/**
 * Exposing the Echo GlobalStateContext
 *
 * `Echo Framework and Echo Core`
 */
export function getCoreContext(): GlobalStateContext {
    return CoreContext;
}

/**
 * Exposing the Echo Atom<GlobalContext>
 *
 * `Echo Framework and Echo Core`
 */
export function getCoreState(): Atom<GlobalState> {
    return CoreContext.state;
}
