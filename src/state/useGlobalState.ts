import { useAtom } from '@dbeining/react-atom';
import { getCoreState } from '../state/globalState';
import { GlobalState } from '../types';

export default function useGlobalState(): GlobalState {
    return useAtom(getCoreState());
}
