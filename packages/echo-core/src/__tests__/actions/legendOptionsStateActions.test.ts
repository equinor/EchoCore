import { eventHub } from '@equinor/echo-base';
import { dispatch, readState } from '../../actions/coreActions/globalActions';
import { getLegendOption, setLegendOption } from '../../actions/legendOptions';
import { defaultGlobalState } from '../../state/defaultStates';
import { getCoreContext } from '../../state/globalState';
import { EchoEvents, GlobalState } from '../../types';

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
}

describe('legendOptionsStateActions', () => {
    beforeEach(() => {
        initialize();
    });
    describe('setLegendOption', () => {
        it('should set legend option state and dispatch a legendTypeChanged event', () => {
            // given
            let actualEventHubPayload;
            const legendOptionToSet = { isActive: false, selectedLegendType: 'testLegendType' };
            const unsubscribe = eventHub.subscribe(EchoEvents.LegendTypeChanged, (payload) => {
                actualEventHubPayload = payload;
            });

            // when
            setLegendOption(legendOptionToSet);

            // then
            expect(legendOptionToSet).toEqual(readState(getCoreContext(), (state: GlobalState) => state.legendOptions));
            expect(actualEventHubPayload).toEqual({
                newLegendType: 'testLegendType'
            });
            unsubscribe();
        });

        it(`should not emit legendTypeChanged if legendType hasn't been changed`, () => {
            // given
            let actualEventHubPayload;
            const legendOptionToSet = { isActive: false };
            const expectedLegendOptions = {
                ...legendOptionToSet,
                selectedLegendType: 'Stid'
            };
            const unsubscribe = eventHub.subscribe(EchoEvents.LegendTypeChanged, (payload) => {
                actualEventHubPayload = payload;
            });

            // when
            setLegendOption(legendOptionToSet);

            // then
            expect(expectedLegendOptions).toEqual(
                readState(getCoreContext(), (state: GlobalState) => state.legendOptions)
            );
            expect(actualEventHubPayload).not.toBeDefined();
            unsubscribe();
        });
    });

    describe('getLegendOptions', () => {
        it('should get default legend from global state', () => {
            const result = getLegendOption();
            expect(result).toEqual({
                isActive: true,
                selectedLegendType: 'Stid'
            });
        });

        it('should get legend option state', () => {
            // given
            setLegendOption({
                selectedLegendType: 'aDifferentLegendType'
            });

            // when
            const result = getLegendOption();

            // then
            expect(result).toEqual({
                isActive: true,
                selectedLegendType: 'aDifferentLegendType'
            });
        });
    });
});
