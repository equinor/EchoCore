import { AppLink, RouteRegistration } from '../types/registry';
import { registerAppLink, unRegisterAppLink } from './appLinks';
import { registerRoute, unRegisterRoute } from './routes';

export type AppOptions = RouteRegistration & AppLink;

export function registerApp<RKey extends string>(key: RKey, options: AppOptions): void {
    registerRoute(key, options);
    registerAppLink(key, options);
}

export function unRegisterApp<RKey extends string>(key: RKey): void {
    unRegisterRoute(key);
    unRegisterAppLink(key);
}
