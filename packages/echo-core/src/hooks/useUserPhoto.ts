import { useGlobalState } from '../state/useGlobalState';

/**
 * Echo Core function for getting the graph user photo url from the echo core state.
 */
export function useUserPhoto(): string | undefined {
    return useGlobalState((state) => state.userPhotoUrl);
}
