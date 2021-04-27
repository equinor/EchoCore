import { AppMetaData, EchoModuleApi as ModuleApi, eventHub } from '@equinor/echo-base';
import React from 'react';
import {
    registerApp,
    RegisterAppOptions,
    registerPage,
    registerPanels,
    unRegisterApp,
    unRegisterPage,
    unRegisterPanels,
    updatePanelUI
} from '../actions';
import { AppKey, PanelUI, RouteRegistration } from '../types';
import { AppComponentProps } from '../types/api';
import { WrappedComponent } from '../types/components';
import { EchoPanelOptions, Panel } from '../types/panel';
declare module '@equinor/echo-base' {
    interface EchoModuleApi {
        registerApp: (appComponent: WrappedComponent<AppComponentProps>, options?: AppOptions) => void;
        unRegisterApp: () => void;
        registerAppPanels: (panels: Panel[], options: Partial<EchoPanelOptions>) => void;
        registerPanels: (key: string, panels: Panel[], options?: Partial<EchoPanelOptions>) => void;
        registerAppWithKey: (key: string, options: RegisterAppOptions) => void;
        unRegisterPanels: (key: string) => void;
        updatePanelUI: (ui?: PanelUI, key?: string) => void;
        registerPage: (path: string, component: React.FC, options?: PageOptions) => void;
        unRegisterPage: (appKey: AppKey) => void;
    }
}

export type EchoModuleApi = ModuleApi;

export interface EchoAppModuleApiCreator {
    (meta: AppMetaData): EchoModuleApi;
}
export interface AppOptions {
    appMenu?: boolean;
    homeScreen?: boolean;
    layoutKey?: string;
    icon?: string;
    description?: string;
}

export interface PageOptions {
    layoutKey?: string;
}

export function createEchoAppModuleApi(): EchoAppModuleApiCreator {
    return (meta: AppMetaData): EchoModuleApi => {
        const { key, name, shortName } = meta;
        return {
            meta,
            eventHub,
            registerApp: (component: WrappedComponent<AppComponentProps>, options: AppOptions = {}): void => {
                const { layoutKey, appMenu, homeScreen, icon, description } = options;
                const appOptions: RegisterAppOptions = {
                    component,
                    tile: name,
                    icon,
                    layoutKey,
                    path: `/${shortName}`,
                    key,
                    description,
                    appMenu: appMenu === undefined ? true : appMenu ? true : false,
                    homeScreen
                };
                registerApp(shortName, appOptions);
            },
            registerAppPanels: (panels: Panel[], options?: Partial<EchoPanelOptions>): void => {
                registerPanels(shortName, panels, options);
            },
            unRegisterApp: (): void => {
                unRegisterApp(shortName);
            },
            registerAppWithKey: registerApp,
            registerPanels,
            unRegisterPanels,
            updatePanelUI,
            registerPage: (path: string, component: React.FC, options?: PageOptions): void => {
                const page: RouteRegistration = {
                    key: path,
                    path,
                    component,
                    ...options
                };
                registerPage(path, page);
            },
            unRegisterPage
        };
    };
}
