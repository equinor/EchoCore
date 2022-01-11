import { eventHub } from '@equinor/echo-base';
import { getCoreContext } from '../state/globalState';
import { EchoEvents } from '../types/echoEvents';
import { LegendOptions } from '../types/legend';
import { GlobalState } from '../types/state';
import { dispatch, readState } from './coreActions/globalActions';
/**
 * Echo core function for updating the legend State.
 * @export Function from Echo Core
 * @param {Partial<LegendOptions>} { isActive: boolean; selectedLegendType: string; }
 */
export function setLegendOption(legendOptions: Partial<LegendOptions>): void {
    eventHub.emit(EchoEvents.LegendTypeChanged, {
        newLegendType: legendOptions.selectedLegendType
    });
    dispatch(getCoreContext(), (state: GlobalState) => {
        return {
            ...state,
            legendOptions: {
                ...state.legendOptions,
                ...legendOptions
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
