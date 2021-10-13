import * as error from '@equinor/echo-base/lib/errors';
import { setLegendOption } from './actions/legendOptions';
import * as moduleActions from './actions/moduleState';
import * as hooks from './hooks';
import { useAuthenticate } from './hooks/useAuthenticate';
import { useLegendOptions } from './hooks/useLegendOptions';
import { useEchoSetup } from './hooks/useSetup';
import { useUserPhoto } from './hooks/useUserPhoto';
import { useUserProfile } from './hooks/useUserProfile';
import { EchoAuthProvider } from './services/authentication/echoProvider';
import { echoClient } from './services/echoClient/echoClient';
import { errorHandler } from './services/errorHandler/errorHandler';
import { echopediaHookRegistry } from './services/hookRegistry';
import * as moduleState from './state';
import { useAppModuleState } from './state/useAppModuleState';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './types';

export const EchoCore = {
    useEchoSetup: useEchoSetup,
    useAppModuleState: useAppModuleState,
    useLegendOptions: useLegendOptions,
    useUserProfile: useUserProfile,
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
    echopediaHookRegistry,
    error,
    keys: {
        ECHO_CORE_MAIN: ECHO_CORE_MAIN,
        ECHO_CORE_SEARCH: ECHO_CORE_SEARCH
    }
};
