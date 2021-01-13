import { useState } from 'react';
import EchoAuthProvider from '../services/authentication/echoProvider';
import { setup } from '../state/setup';
import { CoreConfig } from '../types/coreConfig';
import useInitial from './useInitial';

const rootLoadingElement = document.getElementById('rootloading');

/**
 * Echo core hook for initializing echo core setup
 * @param config configuration object specific to for echo application
 * @returns whether user is authenticated or not
 */
const useEchoSetup = (config: CoreConfig): boolean => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useInitial(async () => {
        rootLoadingElement && rootLoadingElement.remove();
        await setup(config);
        setIsAuthenticated(EchoAuthProvider.isAuthenticated);
    });

    return isAuthenticated;
};

export default useEchoSetup;
