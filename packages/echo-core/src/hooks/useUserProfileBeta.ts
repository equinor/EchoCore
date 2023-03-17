import { UserProfileBeta } from '../services/graph/graphTypes';
import { useGlobalState } from '../state/useGlobalState';

/**
 * Echo Core function for getting the graph user profile beta from echo core state.
 */
export function useUserProfileBeta(): UserProfileBeta | undefined {
    return useGlobalState((state) => state.userProfileBeta);
}

export default useUserProfileBeta;
