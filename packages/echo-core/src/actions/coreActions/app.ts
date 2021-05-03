import { AppLink, RouteRegistration } from '../../types/registry';
import { registerAppLink, unRegisterAppLink } from '../appLinks';
import { registerRoute, unRegisterRoute } from './routes';

export type RegisterAppOptions = RouteRegistration & AppLink;

export function registerApp(appKey: string, options: RegisterAppOptions): void {
    const { component, path, layoutKey, key, ...rest } = options;

    const appLinkOption: AppLink = { ...rest, path };
    const appRouteOption: RouteRegistration = { component, path, layoutKey, key };

    registerRoute(appKey, appRouteOption);
    registerAppLink(appKey, appLinkOption);
}

export function unRegisterApp(appKey: string): void {
    unRegisterRoute(appKey);
    unRegisterAppLink(appKey);
}
