import useInitial from '../hooks/useInitial';
import { registerModuleState } from '../modules/moduleContext';
import { useGlobalState } from './useGlobalState';

/**
 * Hook for handling the application module state object.
 * @param initialState The initial state object used for registering.
 * this parameter is default undefined for preventing initialization on every render.
 */
export function useAppModuleState<T>(initialState: T | undefined = undefined): T {
    useInitial(() => {
        initialState && registerModuleState(initialState);
    });

    return useGlobalState<T>((state) => state.moduleState as T);
}
