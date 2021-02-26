import { EnvironmentVariables } from './configuration/environment';
import Env from './Env';
import useAppModuleState from './hooks/useAppModuleState';
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

export { readModuleState, updateModuleState, updateSpecificModuleState } from './actions/moduleState';
export { default as useAppModuleState } from './hooks/useAppModuleState';
export { default as useCleanup } from './hooks/useCleanup';
export { default as useInitial } from './hooks/useInitial';
export { default as usePanels } from './hooks/usePanels';
export { default as usePlantSettings } from './hooks/useSetting';
export * from './observers/classObserver';
export { default as PanelHandler } from './panels/corePanels';
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
export * from './types';
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
