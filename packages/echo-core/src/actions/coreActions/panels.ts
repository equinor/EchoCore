import { getCoreContext } from '../../state/globalState';
import { EchoPanelOptions, GlobalState, Panel, UnRegisterPanels } from '../../types';
import { addOrOverwriteWithKey, removeWithKey } from '../../utils/state';
import { dispatch } from './globalActions';

/**
 * Core Action for registering panel or panels.
 * Remember that each panel should have a unique key, if noe this may
 * result in unwanted results.
 *
 *
 * @export
 * @template TKey
 * @param {TKey} key
 * @param {(Panel[] | Panel)} [panels=[]]
 * @param {Partial<EchoPanelOptions>} [options]
 * @return {*}  {unRegisterPanels} function for registering the registered panel.
 */
export function registerPanels<TKey extends string>(
    key: TKey,
    panels: Panel[] | Panel = [],
    options?: Partial<EchoPanelOptions>
): UnRegisterPanels {
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
    return (): void => {
        unRegisterPanels(key);
    };
}

/**
 * return function of register panel.
 * Removes the registered panel registered on provided key.
 *
 * @export
 * @template TKey
 * @param {TKey} key
 * @param {(Panel | Array<Panel>)} panels
 */
function unRegisterPanels<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        registry: {
            ...s.registry,
            panels: removeWithKey(s.registry.panels, key)
        }
    }));
}
