import { useAtom } from '@dbeining/react-atom';
import { setModuleState } from '../actions/globalStateActions';
import { useInitial } from '../hooks/useInitial';
import { getCoreState } from './globalState';

/**
 * Hook for handling the application module state object.
 * @param initialState The initial state object used for registering.
 * this parameter is default undefined for preventing initialization on every render.
 */
export function useAppModuleState<T>(initialState: T | undefined = undefined): T {
    const state = useAtom(getCoreState());

    useInitial(() => {
        initialState && setModuleState(initialState);
    });

    return state.moduleState as T;
}
