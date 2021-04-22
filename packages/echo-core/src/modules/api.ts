import { AppMetaData, EchoModuleApi, eventHub } from '@equinor/echo-base';
import { registerApp, RegisterAppOptions, registerPanels, unRegisterApp, unRegisterPanels } from '../actions';
import { AppComponentProps } from '../types/api';
import { WrappedComponent } from '../types/components';
import { EchoPanelOptions, Panel } from '../types/panel';

declare module '@equinor/echo-base' {
    interface EchoModuleApi {
        registerApp: (appComponent: WrappedComponent<AppComponentProps>, options: AppOptions) => void;
        unRegisterApp: () => void;
        registerAppPanels: (panels: Panel[], options: Partial<EchoPanelOptions>) => void;
        registerPanels: (key: string, panels: Panel[], options: Partial<EchoPanelOptions>) => void;
        registerAppWithKey: (key: string, options: RegisterAppOptions) => void;
        unRegisterPanels: (key: string) => void;
    }
}

export interface EchoAppModuleApiCreator {
    (meta: AppMetaData): EchoModuleApi;
}
export interface AppOptions {
    mainMenu: boolean;
    homeScreen?: boolean;
    layoutKey?: string;
    icon?: string;
}

export function createEchoAppModuleApi(): EchoAppModuleApiCreator {
    return (meta: AppMetaData): EchoModuleApi => {
        const { key, name, icon, description } = meta;

        return {
            meta,
            eventHub,
            registerApp: (
                component: WrappedComponent<AppComponentProps>,
                options: AppOptions = { mainMenu: true }
            ): void => {
                const appOptions: RegisterAppOptions = {
                    component,
                    tile: name,
                    icon: options.icon ? options.icon : icon,
                    layoutKey: options.layoutKey,
                    url: `/${key}`,
                    key,
                    description
                };
                registerApp(key, appOptions);
            },
            registerAppPanels: (panels: Panel[], options: Partial<EchoPanelOptions>): void => {
                registerPanels(key, panels, options);
            },
            unRegisterApp: (): void => {
                unRegisterApp(key);
            },
            registerAppWithKey: registerApp,
            registerPanels,
            unRegisterPanels
        };
    };
}
