import { setLegendOption } from './actions/legendOptions';
import { registerPanels } from './actions/panels';
import { EnvironmentVariables } from './configuration/environment';
import Env from './Env';
import useAuthenticate from './hooks/useAuthenticate';
import useLegendOptions from './hooks/useLegendOptions';
import useEchoSetup from './hooks/useSetup';
import useUserPhoto from './hooks/useUserPhoto';
import useUserProfile from './hooks/useUserProfile';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './panels/corePanels';
import EchoAuthProvider from './services/authentication/echoProvider';
import echoClient from './services/echoClient/echoClient';
import useAppModuleState from './state/useAppModuleState';
export { EchoEvents, storage } from '@equinor/echo-base';
export type { ErrorProperties } from '@equinor/echo-base';
export { default as ArgumentError } from '@equinor/echo-base/lib/errors/ArgumentError';
export { default as BaseError } from '@equinor/echo-base/lib/errors/BaseError';
export { BackendError, ForbiddenError, NotFoundError, ValidationError } from '@equinor/echo-base/lib/errors/network';
export { default as NetworkError } from '@equinor/echo-base/lib/errors/NetworkError';
export { default as eventHub } from '@equinor/echo-base/lib/utils/eventHub';
export { readModuleState, updateModuleState, updateSpecificModuleState } from './actions/moduleState';
export { getPlants, getPlantsData, setPlantsData } from './actions/plantsData';
export { default as EchoEventHubContext } from './contexts/EchoEventHubContext';
export { default as useCleanup } from './hooks/useCleanup';
export { useEchoEventHub, useEventSubscriber } from './hooks/useEchoEventHub';
export { default as useInitial } from './hooks/useInitial';
export { default as usePanels } from './hooks/usePanels';
export * from './observers/classObserver';
export { default as PanelHandler } from './panels/corePanels';
export { usePlants, usePlantsData } from './plants/usePlants';
export { default as EchoEventHubProvider } from './providers/EchoEventHubProvider';
export { AuthenticationProvider } from './services/authentication/authProvider';
export { default as BaseClient } from './services/baseClient/baseClient';
export { default as EchoSettings } from './settings';
export {
    getInstCode,
    getProCoSysPlantId,
    getSapPlantId,
    getSelectedPlant,
    setSelectedPlant
} from './settings/plantSettingsActions';
export { default as usePlantSettings } from './settings/useSetting';
export { default as useAppModuleState } from './state/useAppModuleState';
export * from './state/useGlobalState';
export * from './types';
export { makeUniqBy } from './utils/uniq';

export const EchoEnv = new Env();

export class Core {
    useEchoSetup = useEchoSetup;
    registerPanels = registerPanels;
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
