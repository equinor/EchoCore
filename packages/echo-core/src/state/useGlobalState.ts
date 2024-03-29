import { GlobalState } from '../types/state';
import { useGlobalStore } from './globalState';

/**
 * Hook that yields the full global state.
 * Any change to the global state yields the new state.
 */
export function useGlobalState(): GlobalState;

/**
 * Hook that yields the selected subset of the global state.
 * Only changes to this subset will yield a new state.
 * @param select The subset selection.
 */
export function useGlobalState<R>(select: (state: GlobalState) => R): R;

export function useGlobalState<R>(select?: (state: GlobalState) => R): GlobalState | R {
    const selector = typeof select === 'function' ? select : (state: GlobalState) => state as unknown as R;
    return useGlobalStore(selector);
}
