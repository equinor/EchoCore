import { AccountInfo } from '@azure/msal-browser';

export default interface UserProperties {
    account: AccountInfo | null;
    loginError: boolean;
}
