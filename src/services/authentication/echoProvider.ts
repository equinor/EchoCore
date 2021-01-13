import { Configuration } from '@azure/msal-browser';
import { env } from '../../configuration/environment';
import { AuthenticationProvider } from './authProvider';

const webClientId = env().REACT_APP_AZURE_AD_CLIENT_ID;
const tenant = env().REACT_APP_AZURE_AD_TENNANT;
const authority = `https://login.microsoftonline.com/${tenant}`;

export const echoConfig: Configuration = {
    auth: {
        authority: authority,
        clientId: webClientId,
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        navigateToLoginRequestUrl: true
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true
    }
};

/**
 * Echo Authentication provider instance used as main auth provider for echo
 * Based on the @azure/msal-browser package
 * @param config configuration object specific to for echo application
 */
const EchoAuthProvider = new AuthenticationProvider(echoConfig);
export default EchoAuthProvider;
