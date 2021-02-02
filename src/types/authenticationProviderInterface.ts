import { PublicClientApplication } from '@azure/msal-browser';
import UserProperties from './userProperties';

export interface AuthenticationProviderInterface {
    userProperties: UserProperties;
    isAuthenticated: boolean;
    publicClient: PublicClientApplication;
}
