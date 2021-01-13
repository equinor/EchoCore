import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { env } from '../../configuration/environment';

export const echoClientId = env().REACT_APP_API_CLIENT_ID;

export const echoRequest = (user: AccountInfo): SilentRequest => {
    return {
        account: user,
        forceRefresh: false,
        scopes: [echoClientId + '/.default']
    };
};
