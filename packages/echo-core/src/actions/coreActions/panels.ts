import { getCoreContext } from '../../state/globalState';
import { EchoPanelOptions, GlobalState, Panel } from '../../types';
import { addOrOverwriteWithKey, removeWithKey } from '../../utils/state';
import { dispatch } from './globalActions';

/**
 * Core Action for registering panels
 *
 * @export
 * @template TKey
 * @param {TKey} key
 * @param {(Panel[] | Panel)} [panels=[]]
 * @param {Partial<EchoPanelOptions>} [options={}]
 */
export function registerPanels<TKey extends string>(
    key: TKey,
    panels: Panel[] | Panel = [],
    options?: Partial<EchoPanelOptions>
): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: addOrOverwriteWithKey(s.registry.panels, key, {
                panels: panels instanceof Array ? panels : [panels],
                options: options ? { addSearch: true, ...options } : { addSearch: true }
            })
        }
    }));
}

/**
 * Unregister a panel.
 *
 * @export
 * @template TKey
 * @param {TKey} key
 */
export function unRegisterPanels<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: removeWithKey(s.registry.panels, key)
        }
    }));
}
