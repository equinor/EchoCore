import { AppMetaFetch, EchoPortal } from '@equinor/echo-base';
import EchoCore, { Panel } from '@equinor/echo-core';

type AuthLogFunction = (...args: unknown[]) => void;
const authProvider = EchoCore.EchoAuthProvider;
export interface EchoSetupOptions {
    rootLoadingElementId: string;
    corePanels: Panel[];
    authProviderLogFunc?: AuthLogFunction;
    getModules: AppMetaFetch;
}

async function authenticate(authProviderLogFunc?: AuthLogFunction): Promise<boolean> {
    await authProvider.handleLogin(authProviderLogFunc);
    return authProvider.isAuthenticated;
}

export default async function echoSetup(options: EchoSetupOptions): Promise<EchoPortal | undefined> {
    const isAuthenticated = await authenticate();
    if (!isAuthenticated) return;

    const modules = options.getModules;
    console.log(modules);

    // setSetting(persistEchoSetting.getSettingsFromLocalStorage());

    return {
        isAuthenticated
    };
}
