import { AppKey, RouteRegistration } from '../../types/registry';
import { registerRoute, unRegisterRoute } from './routes';

export function registerPage(appKey: AppKey, pageRegistration: RouteRegistration): void {
    const routeRegistration = {
        ...pageRegistration,
        layoutKey: pageRegistration.layoutKey ? pageRegistration.layoutKey : 'defaultPage'
    };
    registerRoute(appKey, routeRegistration);
}

export function unRegisterPage(appKey: AppKey): void {
    unRegisterRoute(appKey);
}
