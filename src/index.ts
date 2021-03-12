import { EnvironmentVariables } from './configuration/environment';
import Env from './Env';
import useAuthenticate from './hooks/useAuthenticate';
import useLegendOptions from './hooks/useLegendOptions';
import useEchoSetup from './hooks/useSetup';
import useUserPhoto from './hooks/useUserPhoto';
import useUserProfile from './hooks/useUserProfile';
import { setLegendOption } from './legend/legendOptionsStateActions';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './panels/corePanels';
import registerPanels from './panels/registerPanel';
import EchoAuthProvider from './services/authentication/echoProvider';
import echoClient from './services/echoClient/echoClient';
import useAppModuleState from './state/useGlobalState';

export { readModuleState, updateModuleState, updateSpecificModuleState } from './actions/moduleState';
export { default as BaseError } from './errors/BaseError';
export { default as NetworkError } from './errors/NetworkError';
export type { ErrorProperties } from './errors/types';
export { default as useCleanup } from './hooks/useCleanup';
export { default as useInitial } from './hooks/useInitial';
export { default as usePanels } from './hooks/usePanels';
export * from './observers/classObserver';
export { default as PanelHandler } from './panels/corePanels';
export { getPlants, getPlantsData, setPlantsData } from './plants/globalPlantsDataActions';
export { usePlants, usePlantsData } from './plants/usePlants';
export { AuthenticationProvider } from './services/authentication/authProvider';
export { BaseClient } from './services/baseClient.ts/baseClient';
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
export { default as useGlobalState } from './state/useGlobalState';
export * from './types';
export { default as eventHub } from './utils/eventHub';
export { storage } from './utils/storage';
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
