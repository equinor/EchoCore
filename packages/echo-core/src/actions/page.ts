import { AppKey, RouteRegistration } from '../types/registry';
import { registerRoute, unRegisterRoute } from './routes';

export function registerPage(appKey: AppKey, routeRegistration: RouteRegistration): void {
    registerRoute(appKey, routeRegistration);
}

export function unRegisterPage(appKey: AppKey): void {
    unRegisterRoute(appKey);
}
