import { getLegendOptions, setLegendOptions } from '../../actions/legendOptionsStateActions';
import { readState } from '../../state/globalActions';
import { createGlobalApplicationContext, createGlobalState } from '../../state/globalState';
import { GlobalState, GlobalStateContext } from '../../types';

describe('legendOptionsStateActions', () => {
    const expectedLegendOptions = {
        isActive: false,
        selectedLegendType: 'test'
    };
    const globalState = createGlobalState();
    const context: GlobalStateContext = {
        state: globalState
    };

    describe('setLegendOption', () => {
        it('should set legend option state', () => {
            setLegendOptions(false, 'test', context);
            expect(expectedLegendOptions).toEqual(readState(context, (state: GlobalState) => state.legendOptions));
        });

        it('should show default global state', () => {
            setLegendOptions(true, 'Stid');
            expect(expectedLegendOptions).toEqual(readState(context, (state: GlobalState) => state.legendOptions));
        });
    });

    describe('getLegendOptions', () => {
        it('should get legend option state', () => {
            const result = getLegendOptions(context);
            expect(expectedLegendOptions).toEqual(result);
        });

        it('should get default legend from global state', () => {
            const result = getLegendOptions();
            const scopedGlobalState = createGlobalState();
            const context = createGlobalApplicationContext(scopedGlobalState);
            expect(readState(context, (state: GlobalState) => state.legendOptions)).toEqual(result);
        });
    });
});
