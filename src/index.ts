import { setLegendOption } from './actions/legendOptionsStateActions';
import { env, EnvironmentVariables, isDevelopment, isProduction, setEnv } from './configuration/environment';
import useAppModuleState from './hooks/useAppModuleState';
import useAuthenticate from './hooks/useAuthenticate';
import useLegendOptions from './hooks/useLegendOptions';
import useEchoSetup from './hooks/useSetup';
import useUserPhoto from './hooks/useUserPhoto';
import useUserProfile from './hooks/useUserProfile';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './panels/corePanels';
import registerPanels from './panels/registerPanel';
import { AuthenticationProvider } from './services/authentication/authProvider';
import EchoAuthProvider from './services/authentication/echoProvider';
import { BaseClient } from './services/baseClient.ts/baseClient';
import echoClient from './services/echoClient/echoClient';

export { readModuleState, updateModuleState, updateSpecificModuleState } from './actions/moduleState';
export { default as useAppModuleState } from './hooks/useAppModuleState';
export { default as useCleanup } from './hooks/useCleanup';
export { default as useInitial } from './hooks/useInitial';
export { default as usePanels } from './hooks/usePanels';
export * from './observers/classObserver';
export { default as PanelHandler } from './panels/corePanels';
export * from './settings';
export * from './types';
export { makeUniqBy } from './utils/uniq';

class Core {
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
    AuthProvider = AuthenticationProvider;
    EchoClient = echoClient;
    BaseClient = BaseClient;
}

class Env {
    isDevelopment = isDevelopment;
    isProduction = isProduction;
    env = env;
    setEnv = setEnv;
}

export const EchoEnv = new Env();
const EchoCore = new Core();

export default EchoCore;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}
