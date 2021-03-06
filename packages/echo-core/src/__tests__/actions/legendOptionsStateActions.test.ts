import { dispatch, readState } from '../../actions/coreActions/globalActions';
import { getLegendOption, setLegendOption } from '../../actions/legendOptions';
import { defaultGlobalState } from '../../state/defaultStates';
import { getCoreContext } from '../../state/globalState';
import { GlobalState } from '../../types';

beforeEach(() => {
    initialize();
});

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
}

describe('legendOptionsStateActions', () => {
    const expectedLegendOptions = {
        isActive: false,
        selectedLegendType: 'test'
    };

    describe('setLegendOption', () => {
        it('should set legend option state', () => {
            setLegendOption({ isActive: false, selectedLegendType: 'test' });
            expect(expectedLegendOptions).toEqual(
                readState(getCoreContext(), (state: GlobalState) => state.legendOptions)
            );
        });

        it('should show default global state', () => {
            expectedLegendOptions.isActive = true;
            expectedLegendOptions.selectedLegendType = 'Stid';
            expect(expectedLegendOptions).toEqual(
                readState(getCoreContext(), (state: GlobalState) => state.legendOptions)
            );
        });
    });

    describe('getLegendOptions', () => {
        it('should get legend option state', () => {
            const result = getLegendOption();
            expect(expectedLegendOptions).toEqual(result);
        });

        it('should get default legend from global state', () => {
            const result = getLegendOption();
            expect(readState(getCoreContext(), (state: GlobalState) => state.legendOptions)).toEqual(result);
        });
    });
});
