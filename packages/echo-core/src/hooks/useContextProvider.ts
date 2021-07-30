import { useEffect } from 'react';
import { registerEchoModuleContextProvider } from '../actions/coreActions';
import { useGlobalState } from '../state/useGlobalState';
import { ContextProvider } from '../types/context';
import { GlobalState } from '../types/state';

/**
 * Hook for getting the Modules registered context provider.
 *
 * @export
 * @return {*}  {(ContextProvider | undefined)}
 */
export function useContextProvider(): ContextProvider | undefined {
    return useGlobalState((state: GlobalState) => state.contextProvider);
}
/**
 * Hook fro adding context provider for modules.
 *
 * @export
 * @param {ContextProvider} contextProvider
 */
export function useModuleContextProvider(contextProvider: ContextProvider): void {
    useEffect(() => {
        registerEchoModuleContextProvider(contextProvider);
    }, [contextProvider]);

    useEffect(() => {
        return (): void => {
            registerEchoModuleContextProvider(undefined);
        };
    }, []);
}
