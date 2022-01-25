import { eventHub, ModuleMetaData } from '@equinor/echo-base';
import React from 'react';
import { updatePanelUI } from '../actions';
import {
    registerApp,
    RegisterAppOptions,
    registerExtension,
    registerPage,
    registerPanels,
    unRegisterApp,
    unRegisterPage
} from '../actions/coreActions';
import { RouteRegistration } from '../types';
import {
    AppComponentProps,
    AppOptions,
    EchoAppModuleApiCreator,
    EchoModuleApi,
    PageOptions,
    UnRegisterApp,
    UnRegisterPage
} from '../types/api';
import { WrappedComponent } from '../types/components';
import { ExtendableComponentName } from '../types/registry/extension.types';
import { getKeyFromPath } from '../utils/path';

/**
 * Return a function for creating the modules api.
 * witch will be called with the modules meta data and return `EchoModuleApi`
 * @return {*}  {EchoAppModuleApiCreator}
 */
export function createEchoAppModuleApi(): EchoAppModuleApiCreator {
    return (meta: ModuleMetaData): EchoModuleApi => {
        const { name, shortName, path } = meta;
        const appKey = getKeyFromPath(path);
        return {
            meta,
            eventHub,
            registerApp: (component: WrappedComponent<AppComponentProps>, options: AppOptions = {}): UnRegisterApp => {
                const { mainMenu, icon, panels, panelsOptions, ...rest } = options;
                const appOptions: RegisterAppOptions = {
                    ...rest,
                    component,
                    name,
                    path,
                    shortName: shortName ? shortName : appKey,
                    key: appKey,
                    icon: icon ? icon : 'category',
                    mainMenu: mainMenu === undefined ? true : mainMenu ? true : false
                };
                registerApp(appKey, appOptions);
                if (options.panels) registerPanels(appKey, panels, panelsOptions);
                return (): void => {
                    unRegisterApp(appKey);
                };
            },
            registerAppSubPage: (subPath: string, component: React.FC, options?: PageOptions): UnRegisterPage => {
                const key = getKeyFromPath(path);
                const page: RouteRegistration = {
                    key: `${appKey}_${key}`,
                    path: path + subPath,
                    component,
                    ...options
                };
                registerPage(path, page);
                return (): void => {
                    unRegisterPage(key);
                };
            },
            registerAppWithKey: (appKey: string, options: RegisterAppOptions): UnRegisterApp => {
                registerApp(appKey, options);
                return (): void => {
                    unRegisterApp(appKey);
                };
            },
            registerPanels,
            updatePanelUI,
            registerPage: (path: string, component: React.FC, options?: PageOptions): UnRegisterPage => {
                const key = getKeyFromPath(path);
                const page: RouteRegistration = {
                    key,
                    path,
                    component,
                    ...options
                };
                registerPage(path, page);
                return (): void => {
                    unRegisterPage(key);
                };
            },
            registerAppContextualNavIcon: (args: {
                component?: any;
                iconName?: string;
                isVisible?: (...args) => boolean;
            }): void => {
                const { component, iconName, isVisible } = args;
                registerExtension({
                    key: 'myFirstExtension',
                    extends: ExtendableComponentName.ContextualNavigationList,
                    iconName,
                    component,
                    isVisible
                });
            }
        };
    };
}
