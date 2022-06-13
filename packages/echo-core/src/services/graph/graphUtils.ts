import { AuthenticationResult } from '@azure/msal-browser';
import { User } from '@microsoft/microsoft-graph-types';
import { env, isDevelopment } from '../../configuration/environment';
import { EchoAuthProvider } from '../authentication/echoProvider';
import { graphApiRequest, graphConfig } from './graphConfig';
import { UserProfileBeta } from './graphTypes';

/**
 * Graph method for fetching a users profile
 * Method authenticates user based on EchoAuthProvider user information
 * @returns User profile or undefined if user is not authenticated
 */
export const graphGetProfile = async (): Promise<User | undefined> => {
    const authenticationResult = await authenticate();

    return authenticationResult
        ? await graphGet<User>(graphConfig.graphProfileEndpoint, authenticationResult.accessToken)
        : undefined;
};

export const graphGetProfileBeta = async (): Promise<UserProfileBeta | undefined> => {
    const authenticationResult = await authenticate();

    return authenticationResult
        ? await graphGet<UserProfileBeta>(graphConfig.graphProfileExtendedEndpoint, authenticationResult.accessToken)
        : undefined;
};

/**
 * Graph method for fetching a users profile picture
 * Method authenticates user based on EchoAuthProvider user information
 * @returns User profile picture or undefined if user is not authenticated
 */
export const graphGetProfilePicture = async (): Promise<string | undefined> => {
    const authenticationResult = await authenticate();

    return authenticationResult
        ? await getUserProfilePicture(graphConfig.graphProfilePictureEndpoint, authenticationResult.accessToken)
        : undefined;
};

async function authenticate(): Promise<AuthenticationResult | null> {
    if (!EchoAuthProvider.userProperties.account) return null;

    return await EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate(
        graphApiRequest(EchoAuthProvider.userProperties.account),
        EchoAuthProvider.loginRequest
    );
}

export async function graphGet<T>(endpoint: string, token: string): Promise<T | undefined> {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
    headers.append('Authorization', bearer);

    const options = {
        method: 'GET',
        headers: headers
    };

    const response: Response = await fetch(endpoint, options);
    if (response && response.ok) {
        return await response.json();
    }

    return undefined;
}

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
