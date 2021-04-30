import { setLegendOption } from './actions/legendOptions';
import { EnvironmentVariables } from './configuration/environment';
import Env from './Env';
import useAuthenticate from './hooks/useAuthenticate';
import useLegendOptions from './hooks/useLegendOptions';
import useEchoSetup from './hooks/useSetup';
import useUserPhoto from './hooks/useUserPhoto';
import useUserProfile from './hooks/useUserProfile';
import EchoAuthProvider from './services/authentication/echoProvider';
import echoClient from './services/echoClient/echoClient';
import useAppModuleState from './state/useAppModuleState';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './types';

export { EchoEvents, storage } from '@equinor/echo-base';
export type { ErrorProperties } from '@equinor/echo-base';
export { default as ArgumentError } from '@equinor/echo-base/lib/errors/ArgumentError';
export { default as BaseError } from '@equinor/echo-base/lib/errors/BaseError';
export { BackendError, ForbiddenError, NotFoundError, ValidationError } from '@equinor/echo-base/lib/errors/network';
export { default as NetworkError } from '@equinor/echo-base/lib/errors/NetworkError';
export { default as eventHub } from '@equinor/echo-base/lib/utils/eventHub';
export * from './actions';
export { default as EchoEventHubContext } from './contexts/EchoEventHubContext';
export * from './hooks';
export * from './modules';
export * from './observers/classObserver';
export { usePlants, usePlantsData } from './plants/usePlants';
export { default as EchoEventHubProvider } from './providers/EchoEventHubProvider';
export { AuthenticationProvider } from './services/authentication/authProvider';
export { default as BaseClient } from './services/baseClient/baseClient';
export { default as EchoSettings } from './settings';
export * from './settings/plantSettingsActions';
export * from './settings/useSetting';
export { default as useAppModuleState } from './state/useAppModuleState';
export * from './state/useGlobalState';
export * from './types';
export { makeUniqBy } from './utils/uniq';
export const EchoEnv = new Env();

export class Core {
    useEchoSetup = useEchoSetup;
    useAppModuleState = useAppModuleState;
    useLegendOptions = useLegendOptions;
    useUserProfile = useUserProfile;
    useUserPhoto = useUserPhoto;
    useAuthenticate = useAuthenticate;
    setLegendOption = setLegendOption;
    ECHO_CORE_MAIN = ECHO_CORE_MAIN;
    ECHO_CORE_SEARCH = ECHO_CORE_SEARCH;
    EchoAuthProvider = EchoAuthProvider;
    EchoClient = echoClient;
}

const EchoCore = new Core();
export default EchoCore;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}
