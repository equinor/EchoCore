import { useAtom } from '@dbeining/react-atom';
import { User } from '@microsoft/microsoft-graph-types';
import { CoreContext } from '../state/globalState';

/**
 * Echo Core function for getting the graph user profile from echo core state.
 */
export default function useUserProfile(): User | undefined {
    const { userProfile } = useAtom(CoreContext.state);
    return userProfile;
}
