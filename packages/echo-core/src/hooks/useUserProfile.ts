import { User } from '@microsoft/microsoft-graph-types';
import { useGlobalState } from '../state/useGlobalState';

/**
 * Echo Core function for getting the graph user profile from echo core state.
 */
export function useUserProfile(): User | undefined {
    return useGlobalState((state) => state.userProfile);
}
