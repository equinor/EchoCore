import { Configuration } from '@azure/msal-browser';
import { env } from '../../configuration/environment';
import { AuthenticationProvider } from './authProvider';

export function echoConfig(): Configuration {
    return {
        auth: {
            authority: `https://login.microsoftonline.com/${env().REACT_APP_AZURE_AD_TENNANT}`,
            clientId: env().REACT_APP_AZURE_AD_CLIENT_ID,
            redirectUri: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            navigateToLoginRequestUrl: true
        },
        cache: {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: true
        }
    };
}

/**
 * Echo Authentication provider instance used as main auth provider for echo
 * Based on the @azure/msal-browser package
 * @param config configuration object specific to for echo application
 */

let authProviderInstance: undefined | AuthenticationProvider = undefined;

export function EchoAuthProvider(): AuthenticationProvider {
    if (!authProviderInstance) authProviderInstance = new AuthenticationProvider(echoConfig());
    return authProviderInstance;
}
