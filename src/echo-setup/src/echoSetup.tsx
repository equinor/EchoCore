import { AppMetaFetch } from '@equinor/echo-base';
import { Panel } from '@equinor/echo-core';
import { authenticate } from '../setup';
export interface EchoSetupOptions {
    rootLoadingElementId: string;
    leftPanel: Panel;
    rightPanel: Panel;
    authProviderLogFunc?: (...args: unknown[]) => void;
    getModules: AppMetaFetch;
}

export default async function echoSetup(options: EchoSetupOptions): Promise<EchoPortal | undefined> {
    const isAuthenticated = await authenticate(options);
    if (!isAuthenticated) return;

    const modules = await getModulesMeta(options.getModules);
    console.log(modules);

    setSetting(persistEchoSetting.getSettingsFromLocalStorage());

    return {
        isAuthenticated
    };
}
