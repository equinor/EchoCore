import { User } from '@microsoft/microsoft-graph-types';
import { UserProfileBeta } from '../services/graph/graphTypes';
import { getCoreContext } from '../state/globalState';
import { GlobalState } from '../types/state';
import { dispatch } from './coreActions/globalActions';

/**
 * Echo Core function for adding user information to echo core state.
 * @param userProfile use for updating user profile.
 * @param userPhotoUrl use for updating user photo url.
 *
 */
export function setUserInformation(userProfile?: User, userProfileBeta?: UserProfileBeta, userPhotoUrl?: string): void {
    dispatch(getCoreContext(), (state: GlobalState) => {
        return {
            ...state,
            userProfile,
            userProfileBeta,
            userPhotoUrl
        };
    });
}
