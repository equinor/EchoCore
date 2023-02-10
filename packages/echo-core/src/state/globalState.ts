import { useStore } from 'zustand';
import { createStore, StoreApi } from 'zustand/vanilla';
import { GlobalStateContext } from '../types';
import { GlobalsStateActions } from '../types/actions';
import { GlobalState } from './../types/state';
import { defaultGlobalState } from './defaultStates';

/**
 * Echo Core function for creating the GlobalState object.
 * @returns Atom<GlobalState>
 * Too read this state use getCoreContext
 *
 * `Echo Core only`
 */
export const globalStore = createStore(() => ({
    ...defaultGlobalState
}));

export const useGlobalStore = <T>(selector: (state: GlobalState) => T) => useStore(globalStore, selector);

/**
 * Echo Core function for creating the GlobalApplicationContext.
 * @param state use with createGlobalState function.
 * This will provides all necessary functions for Echo Core
 *
 * `Echo Core only.`
 */
export function createGlobalApplicationContext(store: StoreApi<GlobalState>): GlobalStateContext {
    return {
        state: store,
        actions: {} as GlobalsStateActions
        // Todo update with httpApi, authentication and more...
    };
}

/**
 * Echo CoreContext created the the createGlobalApplicationContext
 * providing GlobalState  and core application functionality
 *
 * `Echo Core only.`
 */
export const CoreContext = createGlobalApplicationContext(globalStore);

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
export function getCoreState(): StoreApi<GlobalState> {
    return CoreContext.state;
}
