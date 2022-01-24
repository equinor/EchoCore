import { getCoreContext } from '../../state/globalState';
import { RouteRegistration } from '../../types/registry/registry';
import { GlobalState } from '../../types/state';
import { addOrOverwriteWithKey, removeWithKey } from '../../utils/state';
import { dispatch, readState } from './globalActions';

/**
 * Function for registering a route to the global state.
 * @export
 * @template TKey
 * @param {TKey} key
 * @param {RouteRegistration} route
 */
export function registerRoute<TKey extends string>(key: TKey, route: RouteRegistration): void {
    dispatch(getCoreContext(), (s: GlobalState) => {
        return {
            ...s,
            registry: {
                ...s.registry,
                routes: addOrOverwriteWithKey(s.registry.routes, key, route)
            }
        };
    });
}

/**
 * Function for removing a route from the global state.
 * @export
 * @template TKey
 * @param {TKey} key
 */
export function unRegisterRoute<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            routes: removeWithKey(s.registry.routes, key)
        }
    }));
}

/**
 * Function for getting the currently registered routes from the global state.
 * @export
 * @return {*}  {Readonly<RouteRegistration[]>}
 */
export function getRoutesData(): Readonly<RouteRegistration[]> {
    const routesData = readState(getCoreContext(), (state: GlobalState) => state.registry.routes);
    return Object.keys(routesData).map((key: string) => routesData[key]);
}
