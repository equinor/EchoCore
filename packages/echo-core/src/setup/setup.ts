import { registerCorePanels, setUserInformation } from '../actions';
import EchoAuthProvider from '../services/authentication/echoProvider';
import { graphGetProfile, graphGetProfilePicture } from '../services/graph/graphUtils';
import { setSetting } from '../settings/globalSettingsActions';
import persistEchoSetting from '../settings/persistEchoSetting';
import { CoreConfig } from '../types/coreConfig';

/**
 * Method for setting up the echo core basics:
 * - authenticate user
 * - registerer panels based on config element
 * - retrieving the settings form local storage.
 * @param coreConfig object that defines application configurations.
 * Which panels should be on the left, and which should be on the right
 * logger function to be used for authentication
 */
export async function setup(coreConfig: CoreConfig): Promise<void> {
    await authenticate(coreConfig);
    registerCorePanels(coreConfig.leftPanel, coreConfig.rightPanel);
    setSetting(persistEchoSetting.getSettingsFromLocalStorage());
}

/**
 * Method for authenticating users in echo
 * @param coreConfig object that defines application configurations.
 * logger function to be used for authentication
 */
export async function authenticate(coreConfig: CoreConfig): Promise<boolean> {
    await EchoAuthProvider.handleLogin(coreConfig.authProviderLogFunc);
    getGraphProfile();
    return EchoAuthProvider.isAuthenticated;
}

/**
 * Method for fetching graph user information users in echo
 * If user is not authenticated, then graph information will never be fetched
 */
export async function getGraphProfile(): Promise<void> {
    if (EchoAuthProvider.isAuthenticated) {
        const [profile, userPhoto] = await Promise.all([graphGetProfile(), graphGetProfilePicture()]);
        setUserInformation(profile, userPhoto);
    }
}
