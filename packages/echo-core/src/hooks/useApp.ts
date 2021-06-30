import { useGlobalState } from '../state/useGlobalState';
import { ActivePanel, ActiveState, EchoAppState, GlobalState } from '../types';

/**
 *
 *
 * @export
 * @return {*}  {EchoAppState}
 */
export function useAppState(): EchoAppState {
    return useGlobalState((state: GlobalState) => state.app);
}

/**
 *
 *
 * @export
 * @return {*}  {string}
 */
export function useActivePanelState(): ActivePanel {
    return useAppState().activePanelState;
}

/**
 *
 *
 * @export
 * @return {*}  {Partial<EchoAppState>}
 */
export function useActiveState(): ActiveState {
    return useAppState().activeState;
}
