import { useAtom } from '@dbeining/react-atom';
import { UserProfileBeta } from '../services/graph/graphTypes';
import { CoreContext } from '../state/globalState';

/**
 * Echo Core function for getting the graph user profile beta from echo core state.
 */
export function useUserProfileBeta(): UserProfileBeta | undefined {
    const { userProfileBeta } = useAtom(CoreContext.state);
    return userProfileBeta;
}

export default useUserProfileBeta;
