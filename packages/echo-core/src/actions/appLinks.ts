import { getCoreContext } from '../state/globalState';
import { AppLink } from '../types/registry';
import { GlobalState } from '../types/state';
import { addOrOverwriteWithKey, removeWithKey } from '../utils/state';
import { dispatch } from './coreActions/globalActions';

/**
 *
 *
 * @export
 * @template AppKey
 * @param {AppKey} appKey
 * @param {AppLink} appLink
 */
export function registerAppLink<AppKey extends string>(appKey: AppKey, appLink: AppLink): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            appLinks: addOrOverwriteWithKey(s.registry.appLinks, appKey, appLink)
        }
    }));
}

/**
 *
 *
 * @export
 * @template AppKey
 * @param {AppKey} appKey
 */
export function unRegisterAppLink<AppKey extends string>(appKey: AppKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            appLinks: removeWithKey(s.registry.appLinks, appKey)
        }
    }));
}
