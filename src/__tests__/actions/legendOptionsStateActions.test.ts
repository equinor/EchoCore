import { getLegendOption, setLegendOption } from '../../legend/legendOptionsStateActions';
import { legendOptions, settings } from '../../state/defaultStates';
import { dispatch, readState } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';
import { ActivePanel, GlobalState } from '../../types';

beforeEach(() => {
    initialize();
});

const globalInit = {
    modules: [],
    panels: [],
    activePanel: ActivePanel.None,
    activeModule: '',
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    legendOptions,
    settings
};

function initialize(): void {
    dispatch(getCoreContext(), () => globalInit);
}

describe('legendOptionsStateActions', () => {
    const expectedLegendOptions = {
        isActive: false,
        selectedLegendType: 'test'
    };

    describe('setLegendOption', () => {
        it('should set legend option state', () => {
            setLegendOption(false, 'test');
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
