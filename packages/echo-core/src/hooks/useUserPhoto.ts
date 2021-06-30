import { useAtom } from '@dbeining/react-atom';
import { CoreContext } from '../state/globalState';

/**
 * Echo Core function for getting the graph user photo url from the echo core state.
 */
export function useUserPhoto(): string | undefined {
    const { userPhotoUrl } = useAtom(CoreContext.state);
    return userPhotoUrl;
}
export default useUserPhoto;
