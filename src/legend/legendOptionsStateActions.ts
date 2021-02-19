import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { LegendOptions } from '../types/legend';
import { GlobalState } from '../types/state';
/**
 * Echo core function for updating the legend State.
 * @export Function from Echo Core
 * @param {Partial<LegendOptions>} { isActive: boolean; selectedLegendType: string; }
 */
export function setLegendOption(legendOptions: Partial<LegendOptions>): void {
    dispatch(getCoreContext(), (state: GlobalState) => {
        return {
            ...state,
            legendOptions: {
                ...state.legendOptions,
                legendOptions
            }
        };
    });
}

/**
 *  Echo core function for retrieving LegendOptions
 * @export Function from Echo Core
 * @return {*}  {LegendOptions}
 */
export function getLegendOption(): LegendOptions {
    return readState(getCoreContext(), (state) => {
        return { ...state.legendOptions } as Readonly<LegendOptions>;
    });
}
