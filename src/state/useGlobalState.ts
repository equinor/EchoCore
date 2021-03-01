import { useAtom } from '@dbeining/react-atom';
import { GlobalState } from '../types/state';
import { getCoreState } from './globalState';

/**
 * Hook for handling the application module state object.
 */
export default function useGlobalState(): GlobalState {
    return useAtom(getCoreState());
}
