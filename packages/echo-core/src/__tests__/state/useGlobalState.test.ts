import { renderHook } from '@testing-library/react';
import { globalStore } from '../../state/globalState';
import { useGlobalState } from '../../state/useGlobalState';
import { GlobalState } from '../../types';

describe('useGlobalState()', () => {
    it('should handle a passed function selector', () => {
        // given

        // when
        const { result } = renderHook(() => useGlobalState((state: GlobalState) => state.settings));

        // then
        expect(result.current).toEqual({
            selectedProcosysProject: '',
            showTextHighlighting: true,
            plantSettings: {
                instCode: '',
                hasTr2000: false,
                sapPlantId: '',
                proCoSysPlantId: '',
                plantName: ''
            }
        });
    });

    it('should handle when no selector is passed: and return with the whole state', () => {
        // given

        // when
        const { result } = renderHook(() => useGlobalState());

        // then
        expect(result.current).toEqual(globalStore.getState());
    });
});
