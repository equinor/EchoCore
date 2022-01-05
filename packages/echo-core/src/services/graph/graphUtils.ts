import { User } from '@microsoft/microsoft-graph-types';
import { env, isDevelopment } from '../../configuration/environment';
import { EchoAuthProvider } from '../authentication/echoProvider';
import { graphApiRequest, graphConfig } from './graphConfig';

/**
 * Graph method for fetching a users profile
 * Method authenticates user based on EchoAuthProvider user information
 * @returns User profile or undefined if user is not authenticated
 */
export const graphGetProfile = async (): Promise<User | undefined> => {
    if (!EchoAuthProvider.userProperties.account) return;

    const authenticationResult = await EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate(
        graphApiRequest(EchoAuthProvider.userProperties.account),
        EchoAuthProvider.loginRequest
    );

    if (authenticationResult) {
        const userProfile = await getUserProfile(graphConfig.graphProfileEndpoint, authenticationResult.accessToken);
        return userProfile;
    } else {
        return;
    }
};

/**
 * Graph method for fetching a users profile picture
 * Method authenticates user based on EchoAuthProvider user information
 * @returns User profile picture or undefined if user is not authenticated
 */
export const graphGetProfilePicture = async (): Promise<string | undefined> => {
    if (!EchoAuthProvider.userProperties.account) return;

    const authenticationResult = await EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate(
        graphApiRequest(EchoAuthProvider.userProperties.account),
        EchoAuthProvider.loginRequest
    );

    if (authenticationResult) {
        const userProfilePictureUrl = await getUserProfilePicture(
            graphConfig.graphProfilePictureEndpoint,
            authenticationResult.accessToken
        );
        return userProfilePictureUrl;
    } else {
        return;
    }
};

/**
 * Graph method that calls fetch user profile from graph api and handles response
 * @param endpoint graph endpoint to call, based on graph config values
 * @param token users access token used in graph fetch call
 * @returns User profile or undefined if response is not successful
 */
export const getUserProfile = async (endpoint: string, token: string): Promise<User | undefined> => {
    let profile: User | undefined = undefined;
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
    headers.append('Authorization', bearer);

    const options = {
        method: 'GET',
        headers: headers
    };

    const response: Response = await fetch(endpoint, options);
    if (response && response.ok) {
        profile = response.json() as User;
    }

    return profile;
};

/**
 * Graph method that calls profile picture endpoint on graph api and handles response
 * @param endpoint graph endpoint to call, based on graph config values
 * @param token users access token used in graph fetch call
 * @returns User profile picture or undefined if response is not successful
 */
export const getUserProfilePicture = async (endpoint: string, token: string): Promise<string | undefined> => {
    let pictureUrl: string | undefined;
    const headers: Headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    headers.append('Content-Type', 'image/jpeg');

    const options = {
        method: 'GET',
        headers: headers
    };

    if (isDevelopment() || env().REACT_APP_LOGGER_ACTIVE) {
        console.log('request for user profile picture made to Graph API at: ' + new Date().toString());
    }

    const response: Response = await fetch(endpoint, options);
    if (response && response.ok) {
        await response.blob().then((data) => {
            if (data !== null) {
                window.URL = window.URL || window.webkitURL;
                pictureUrl = window.URL.createObjectURL(data);
            }
        });
    }
    return pictureUrl;
};
