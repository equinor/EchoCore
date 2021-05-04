import { eventHub, ModuleMetaData } from '@equinor/echo-base';
import React from 'react';
import { updatePanelUI } from '../actions';
import {
    registerApp,
    RegisterAppOptions,
    registerPage,
    registerPanels,
    unRegisterApp,
    unRegisterPage,
    unRegisterPanels
} from '../actions/coreActions';
import { RouteRegistration } from '../types';
import { AppComponentProps, AppOptions, EchoAppModuleApiCreator, EchoModuleApi, PageOptions } from '../types/api';
import { WrappedComponent } from '../types/components';

/**
 * Return a function for creating the modules api.
 * witch will be called with the modules meta data and return `EchoModuleApi`
 * @return {*}  {EchoAppModuleApiCreator}
 */
export function createEchoAppModuleApi(): EchoAppModuleApiCreator {
    return (meta: ModuleMetaData): EchoModuleApi => {
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
                if (options.panels) registerPanels(shortName, options.panels, options.panelsOptions);
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
