import { useGlobalState } from '../state/useGlobalState';
import { CorePanels, EchoCoreComponents } from '../types';

/**
 *
 *
 * @export
 * @return {*}  {EchoCoreComponents}
 */
export function useCoreComponents(): EchoCoreComponents {
    return useGlobalState().coreComponents;
}
/**
 *
 *
 * @export
 * @return {*}  {Partial<CorePanels>}
 */
export function useCorePanels(): Partial<CorePanels> {
    return useCoreComponents().panels;
}
