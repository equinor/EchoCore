import { dispatch, readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { LegendOptions } from '../types/legend';
import { GlobalState } from '../types/state';
/**
 * Echo core function for updating the legend State.
 *
 * @export
 * @param {boolean} isActive
 * @param {string} selectedLegendType
 */
export function setLegendOption(isActive: boolean, selectedLegendType: string): void {
    dispatch(getCoreContext(), (state: GlobalState) => {
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
export function getLegendOption(): LegendOptions {
    return readState(getCoreContext(), (state) => {
        return { ...state.legendOptions } as Readonly<LegendOptions>;
    });
}
