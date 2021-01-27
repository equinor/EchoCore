import { LegendOptions } from '..';
import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { GlobalState } from '../types/state';
/**
 * Echo core function for updating the legend State.
 *
 * @export
 * @param {boolean} isActive
 * @param {string} selectedLegendType
 * @param {*} [context=getCoreContext()]
 */
export function setLegendOption(isActive: boolean, selectedLegendType: string, context = getCoreContext()): void {
    dispatch(context, (state: GlobalState) => {
        const legendOptions: LegendOptions = {
            isActive,
            selectedLegendType
        };
        return {
            ...state,
            legendOptions
        };
    });
}

/**
 *
 *  Echo core function for retrieving LegendOptions
 *
 * @export
 * @return {*}  {LegendOptions}
 */
export function getLegendOption(context = getCoreContext()): LegendOptions {
    return readState(context, (state) => {
        return { ...state.legendOptions } as Readonly<LegendOptions>;
    });
}
