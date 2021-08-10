import React from 'react';
import { dispatch } from '../actions/coreActions/globalActions';
import { getCoreContext } from '../state/globalState';
import { useGlobalState } from '../state/useGlobalState';
import { GlobalState, ModuleContext } from '../types/state';

/**
 * Function for registering the module context on the globalState.
 * This should primarily be used to sent data form module to panels and header.
 * A large module state may slow the application down.
 *
 * @export
 * @param {ModuleContext} moduleContext
 */
export function registerModuleContext<T>(context: React.Context<T>): void {
    const moduleContext = context as ModuleContext<unknown>;
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, moduleContext }));
}

/**
 * Function for registering a new moduleState, Teh state will be registered over any pervious registered state.
 * This to prevent the module state of growing and to persevere memory. So to preserve this state when module is unmounted
 * it's recommended to use indexDb or localStorage.
 *
 * @export
 * @return {*}  {(ContextProvider | undefined)}
 */
export function registerModuleState<T>(initialState: T): void {
    dispatch(getCoreContext(), (state: GlobalState) => ({ ...state, moduleState: initialState }));
}

/**
 * This is for registering the moduleState and the corresponding context at the same time.
 * A simple wrapper of registerModuleState and registerModuleContext.
 *
 * @export
 * @template T
 * @param {T} initialState
 * @param {React.Context<T>} context
 *
 */
export function registerModuleStateAndContext<T>(initialState: T, context: React.Context<T>): void {
    registerModuleState(initialState);
    registerModuleContext(context);
}

/**
 * update the module context state with a Partial of the registered type.
 * It is recommended to provide the interface here which is used, thins this wil give
 * proper type definition.
 *
 * @export
 * @template T
 * @param {Partial<T>} newModuleState
 */
export function setModuleState<T>(newModuleState: Partial<T> | ((state: T) => T)): void {
    dispatch(getCoreContext(), (state: GlobalState) => {
        const moduleState = state.moduleState as T;
        return {
            ...state,
            moduleState: {
                ...moduleState,
                ...(typeof newModuleState === 'function' ? newModuleState(moduleState) : newModuleState)
            }
        };
    });
}

/**
 * update the module context state with a Partial of the registered type.
 * It is recommended to provide the interface here which is used, thins this wil give
 * proper type definition.
 *
 * @export
 * @template T
 * @param {Partial<T>} newModuleState
 * @deprecated
 */

export function updateModuleContextState<T>(newModuleState: Partial<T> | ((state: Partial<T>) => T)): void {
    setModuleState(newModuleState);
}

/**
 * @interface ModuleContextProviderProps
 */
interface ModuleContextProviderProps {
    children: React.ReactNode;
}

/**
 * The context provider for module's context. Tis provider serves
 * the module state to all underlying components. See Readme for more info.
 *
 * @export
 * @param {ModuleContextProviderProps} { children }
 * @return {*}  {JSX.Element}
 */
export function ModuleContextProvider({ children }: ModuleContextProviderProps): JSX.Element {
    const ModuleContext = useGlobalState((state) => ({ ...state.moduleContext }));
    const state = useGlobalState((state) => {
        return { ...state.moduleState };
    });
    return <ModuleContext.Provider value={state}>{children}</ModuleContext.Provider>;
}
