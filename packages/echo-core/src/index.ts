import { EnvironmentVariables } from './configuration/environment';
import { EchoCore } from './EchoCore';
import Env from './Env';

export * from '@azure/msal-browser';
export { EchoEvents, storage } from '@equinor/echo-base';
export type { ErrorProperties } from '@equinor/echo-base';
export * from '@equinor/echo-base/lib/errors';
export type { BaseErrorArgs, CommonErrorArgs } from '@equinor/echo-base/lib/types/error';
export { default as eventHub } from '@equinor/echo-base/lib/utils/eventHub';
export * from './actions';
export * from './actions/moduleState';
export * from './contexts';
export * from './hooks';
export { useCleanup } from './hooks/useCleanup';
export { useEchoEventHub, useEventSubscriber } from './hooks/useEchoEventHub';
export { useInitial } from './hooks/useInitial';
export { usePanels } from './hooks/usePanels';
export * from './modules';
export * from './observers/classObserver';
export { usePlants, usePlantsData } from './plants/usePlants';
export { default as EchoEventHubProvider } from './providers/EchoEventHubProvider';
export { AuthenticationProvider } from './services/authentication/authProvider';
export { default as BaseClient } from './services/baseClient/baseClient';
export * from './settings';
export * from './state/useAppModuleState';
export { useAppModuleState } from './state/useAppModuleState';
export * from './state/useGlobalState';
export * from './types';
export { makeUniqBy } from './utils/uniq';

export const EchoEnv = new Env();

export default EchoCore;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}
