import { useGlobalState } from '../state/useGlobalState';
import { GlobalState } from '../types';
import { AppLink, RegistryState, RouteRegistration } from '../types/registry';

export function useRegistry(): RegistryState {
    return useGlobalState((state: GlobalState) => state.registry);
}

/**
 * Hook for getting the currently registered routes from the global state.
 * @export
 * @return {*}  {RouteRegistration[]}
 */
export function useRoutes(): RouteRegistration[] {
    const { routes } = useRegistry();
    return Object.keys(routes).map((key: string) => routes[key]);
}

/**
 * Hook for getting the links for home screen and app menu
 * The appLinks  are registered in the global state.
 * @export
 * @return {*}  {AppLink[]}
 */
export function useAppLinks(isHome?: boolean): AppLink[] {
    const { appLinks } = useRegistry();

    const links = Object.keys(appLinks).map((key: string) => appLinks[key]);

    if (isHome) {
        return links.filter((appLink: AppLink) => appLink.homeScreen === true);
    }

    return links.filter((appLink: AppLink) => appLink.mainMenu === true);
}
