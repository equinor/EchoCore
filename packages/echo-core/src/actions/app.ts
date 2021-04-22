import { AppLink, RouteRegistration } from '../types/registry';
import { registerAppLink, unRegisterAppLink } from './appLinks';
import { registerRoute, unRegisterRoute } from './routes';

export type RegisterAppOptions = RouteRegistration & AppLink;

export function registerApp(key: string, options: RegisterAppOptions): void {
    registerRoute(key, options);
    registerAppLink(key, options);
}

export function unRegisterApp(key: string): void {
    unRegisterRoute(key);
    unRegisterAppLink(key);
}
