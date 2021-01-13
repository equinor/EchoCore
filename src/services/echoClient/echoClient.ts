import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { AuthenticationProvider } from '../authentication/authProvider';
import EchoAuthProvider from '../authentication/echoProvider';
import { BaseClient } from '../baseClient.ts/baseClient';
import { echoRequest } from './echoClientConfig';

/**
 * Echo client extends base client class and uses echo auth provider for fetch
 */
export class EchoClient extends BaseClient {
    constructor(authProvider: AuthenticationProvider, getSilentRequest: (account: AccountInfo) => SilentRequest) {
        super(authProvider, getSilentRequest);
    }
}

const echoClient = new EchoClient(EchoAuthProvider, echoRequest);
export default echoClient;
