import * as moduleActions from './actions/moduleState';
import { EnvironmentVariables } from './configuration/environment';
import Env from './Env';
import * as hooks from './hooks';
import { useAuthenticate } from './hooks/useAuthenticate';
import { useLegendOptions } from './hooks/useLegendOptions';
import { useEchoSetup } from './hooks/useSetup';
import { useUserPhoto } from './hooks/useUserPhoto';
import { useUserProfile } from './hooks/useUserProfile';
import { setLegendOption } from './legend/legendOptionsStateActions';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './panels/corePanels';
import { registerPanels } from './panels/registerPanel';
import { EchoAuthProvider } from './services/authentication/echoProvider';
import echoClient from './services/echoClient/echoClient';
import * as moduleState from './state';
import { useAppModuleState } from './state/useAppModuleState';
export { EchoEvents, storage } from '@equinor/echo-base';
export type { ErrorProperties } from '@equinor/echo-base';
export * from '@equinor/echo-base/lib/errors';
export { default as eventHub } from '@equinor/echo-base/lib/utils/eventHub';
export * from './actions/moduleState';
export { default as EchoEventHubContext } from './contexts/EchoEventHubContext';
export { useCleanup } from './hooks/useCleanup';
export { useEchoEventHub, useEventSubscriber } from './hooks/useEchoEventHub';
export { useInitial } from './hooks/useInitial';
export { usePanels } from './hooks/usePanels';
export * from './observers/classObserver';
export { PanelHandler } from './panels/corePanels';
export { getPlants, getPlantsData, setPlantsData } from './plants/globalPlantsDataActions';
export { usePlants, usePlantsData } from './plants/usePlants';
export { default as EchoEventHubProvider } from './providers/EchoEventHubProvider';
export { AuthenticationProvider } from './services/authentication/authProvider';
export { default as BaseClient } from './services/baseClient/baseClient';
export * from './settings';
export { useAppModuleState } from './state/useAppModuleState';
export * from './state/useGlobalState';
export * from './types';
export { makeUniqBy } from './utils/uniq';

export const EchoEnv = new Env();

export const EchoCore = {
    //
    useEchoSetup: useEchoSetup,
    registerPanels: registerPanels,
    useAppModuleState: useAppModuleState,
    useLegendOptions: useLegendOptions,
    useUserProfile: useUserProfile,
    useUserPhoto: useUserPhoto,
    useAuthenticate: useAuthenticate,
    setLegendOption: setLegendOption,
    ECHO_CORE_MAIN: ECHO_CORE_MAIN,
    ECHO_CORE_SEARCH: ECHO_CORE_SEARCH,
    EchoAuthProvider: EchoAuthProvider,
    EchoClient: echoClient,

    // Exposing all core Hooks
    hooks,
    moduleState: { ...moduleState, ...moduleActions }
};

export default EchoCore;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}
