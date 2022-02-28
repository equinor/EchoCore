import { AppLink, RouteRegistration } from '../../types/registry/registry';
import { registerAppLink, unRegisterAppLink } from '../appLinks';
import { registerRoute, unRegisterRoute } from './routes';

export type RegisterAppOptions = RouteRegistration & AppLink;

export function registerApp(appKey: string, options: RegisterAppOptions): void {
    const { component, path, layoutKey, key, name, icon, customHeaderSection, exactPath, ...rest } = options;

    const appLinkOption: AppLink = { ...rest, path, name, icon };
    const appRouteOption: RouteRegistration = {
        component,
        path,
        layoutKey,
        key,
        name,
        icon,
        customHeaderSection,
        exactPath
    };

    registerRoute(appKey, appRouteOption);
    registerAppLink(appKey, appLinkOption);
}

export function unRegisterApp(appKey: string): void {
    unRegisterRoute(appKey);
    unRegisterAppLink(appKey);
}
