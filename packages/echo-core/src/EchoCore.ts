import * as error from '@equinor/echo-base/lib/errors';
import { setLegendOption } from './actions/legendOptions';
import * as moduleActions from './actions/moduleState';
import * as hooks from './hooks';
import { useAuthenticate } from './hooks/useAuthenticate';
import { useLegendOptions } from './hooks/useLegendOptions';
import { useEchoSetup } from './hooks/useSetup';
import { useUserPhoto } from './hooks/useUserPhoto';
import { useUserProfile } from './hooks/useUserProfile';
import useUserProfileBeta from './hooks/useUserProfileBeta';
import { EchoAuthProvider } from './services/authentication/echoProvider';
import { echoClient } from './services/echoClient/echoClient';
import { errorHandler } from './services/errorHandler/errorHandler';
import { echoHookRegistry } from './services/hookRegistry';
import * as moduleState from './state';
import { useAppModuleState } from './state/useAppModuleState';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './types';

export const EchoCore = Object.freeze({
    useEchoSetup: useEchoSetup,
    useAppModuleState: useAppModuleState,
    useLegendOptions: useLegendOptions,
    useUserProfile: useUserProfile,
    useUserProfileBeta,
    useUserPhoto: useUserPhoto,
    useAuthenticate: useAuthenticate,
    setLegendOption: setLegendOption,
    EchoAuthProvider: EchoAuthProvider,
    EchoClient: echoClient,

    // Exposing all core Hooks
    hooks,
    moduleState: { ...moduleState, ...moduleActions },
    handleErrors: errorHandler.handleErrors,
    setErrorHandler: errorHandler.setErrorHandler,
    echoHookRegistry,
    error,
    keys: {
        ECHO_CORE_MAIN: ECHO_CORE_MAIN,
        ECHO_CORE_SEARCH: ECHO_CORE_SEARCH
    }
});
