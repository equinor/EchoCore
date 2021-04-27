import { useGlobalState } from '../state/useGlobalState';
import { GlobalState } from '../types';
import { RegistryState, RouteRegistration } from '../types/registry';

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
