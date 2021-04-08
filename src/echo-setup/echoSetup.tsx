import { AppMetaFetch, EchoPortal, getModulesMeta } from '../echo-base';
import { setSetting } from '../echo-core/settings/globalSettingsActions';
import persistEchoSetting from '../echo-core/settings/persistEchoSetting';
import { Panel } from '../echo-core/types/panel';
import { authenticate } from './setup';
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
