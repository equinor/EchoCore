import { getModulesMeta } from '../echo-base/fetchModules';
import { EchoPortal, ModulesMetaFetch } from '../echo-base/types';
import { setSetting } from '../settings/globalSettingsActions';
import persistEchoSetting from '../settings/persistEchoSetting';
import { authenticate } from '../state/setup';
import { Panel } from '../types/panel';

export interface EchoSetupOptions {
    rootLoadingElementId: string;
    leftPanel: Panel;
    rightPanel: Panel;
    authProviderLogFunc?: (...args: unknown[]) => void;
    getModules: ModulesMetaFetch;
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
