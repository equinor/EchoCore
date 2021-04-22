import { AppMetaData, EchoModuleApi, eventHub } from '@equinor/echo-base';
import { AppOptions, registerApp, registerPanels, unRegisterApp, unRegisterPanels } from '../actions';
import { EchoPanelOptions, Panel } from '../types/panel';
declare module '@equinor/echo-base' {
    interface EchoModuleApi {
        registerApp: <RKey extends string>(key: RKey, options: AppOptions) => void;
        unRegisterApp: <Key extends string>(name: Key) => void;
        registerPanels: <TKey extends string>(key: TKey, panels: Panel[], options: Partial<EchoPanelOptions>) => void;
        unRegisterPanels: <Key extends string>(key: Key) => void;
    }
}

interface EchoAppModuleApiCreator {
    (meta: AppMetaData): EchoModuleApi;
}

export function createEchoAppModuleApi(): EchoAppModuleApiCreator {
    return (meta: AppMetaData): EchoModuleApi => {
        return {
            meta,
            eventHub,
            registerApp,
            registerPanels,
            unRegisterApp,
            unRegisterPanels
        };
    };
}
