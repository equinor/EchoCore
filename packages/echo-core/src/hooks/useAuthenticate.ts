import { useEffect, useState } from 'react';
import { AuthenticationProvider } from '../services/authentication/authProvider';

export const useAuthenticate = (
    authProvider: AuthenticationProvider,
    logRequest?: (...args: unknown[]) => void
): boolean => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!authProvider.isAuthenticated) {
            authProvider.handleLogin(logRequest).then(() => {
                setIsAuthenticated(authProvider.isAuthenticated);
            });
        } else {
            setIsAuthenticated(authProvider.isAuthenticated);
        }
    }, [authProvider, logRequest]);

    return isAuthenticated;
};

export default useAuthenticate;
