import { LegendOptions } from '..';
import { dispatch } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { GlobalState } from '../types/state';

export function setLegendOption(isActive: boolean): void {
    dispatch(getCoreContext(), (state: GlobalState) => {
        const legendOptions: LegendOptions = {
            isActive
        };
        return {
            ...state,
            legendOptions
        };
    });
}
