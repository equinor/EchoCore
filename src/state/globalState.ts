
import { Atom } from '@dbeining/react-atom';
import { createContext } from 'react';
import { ActivePanel, GlobalState, GlobalStateContext } from '../types';

/**
 * Echo Core function for creating the GlobalState object.
 * @returns Atom<GlobalState>
 * Too read read this state use getCoreContext
 *
 * `Echo Core only`
 */
export function createGlobalState(): Atom<GlobalState> {
    const defaultState: GlobalState = {
        modules: [],
        panels: [],
        activePanel: ActivePanel.None,
        activeModule: '',
        moduleState: {},
        legendOptions: {
            isActive: true
        }
    };

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
        state: state
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
export const CoreContext = createGlobalApplicationContext(createGlobalState());

/**
 * React Context of the Echo CoreContext
 *
 * `Echo Framework only`
 */
const context = createContext<GlobalStateContext>(CoreContext);

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

/**
 * Exposing the Echo React Context
 *
 * `Echo Framework only`
 */
export function getContext(): React.Context<GlobalStateContext> {
    return context;
}
