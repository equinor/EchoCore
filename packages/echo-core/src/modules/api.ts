import { AppApi as AppModuleApi, AppMetaData } from '@equinor/echo-base/lib/types/module';
import { AppOptions, registerApp, registerPanels, unRegisterApp, unRegisterPanels } from '../actions';
import { EchoPanelOptions, Panel } from '../types/panel';

interface EchoAppModuleApiCreator {
    (moduleMeta: AppMetaData): AppModuleApi;
}

declare module '@equinor/echo-base' {
    interface AppApi {
        registerApp: <RKey extends string>(key: RKey, options: AppOptions) => void;
        unRegisterApp: <Key extends string>(name: Key) => void;
        registerPanels: <TKey extends string>(key: TKey, panels: Panel[], options: Partial<EchoPanelOptions>) => void;
        unRegisterPanes: <Key extends string>(key: Key) => void;
    }
}

export function createEchoAppModuleApi(): EchoAppModuleApiCreator {
    return (meta: AppMetaData): AppModuleApi => {
        return {
            registerApp: registerApp,
            registerPanels: registerPanels,
            unRegisterApp: unRegisterApp,
            unRegisterPanes: unRegisterPanels
        };
    };
}
