import { useGlobalState } from '../state/useGlobalState';
import { ContextProvider } from '../types/context';
import { GlobalState } from '../types/state';

/**
 * Hook for getting the Modules registered context provider.
 *
 * @export
 * @return {*}  {(ContextProvider | undefined)}
 */
export function useModuleContextProvider(): ContextProvider | undefined {
    return useGlobalState((state: GlobalState) => state.contextProvider);
}
