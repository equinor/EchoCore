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
        const { name, shortName, path } = meta;
        return {
            meta,
            eventHub,
            registerApp: (component: WrappedComponent<AppComponentProps>, options: AppOptions = {}): void => {
                const { mainMenu, icon, panels, panelsOptions, ...rest } = options;
                const appOptions: RegisterAppOptions = {
                    ...rest,
                    component,
                    name,
                    path,
                    shortName,
                    key: path,
                    icon: icon ? icon : 'category',
                    mainMenu: mainMenu === undefined ? true : mainMenu ? true : false
                };
                registerApp(shortName, appOptions);
                if (options.panels) registerPanels(shortName, panels, panelsOptions);
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
