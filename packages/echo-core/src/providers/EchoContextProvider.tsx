import React, { ReactNode, useMemo } from 'react';
import { EchoGlobalContext } from '../contexts/EchoGlobalContext';
import { getCoreContext } from '../state/globalState';

interface EchoGlobalContextProviderProps {
    children: ReactNode;
}

export const EchoGlobalContextProvider: React.FC<EchoGlobalContextProviderProps> = ({ children }) => {
    const providerPayload = useMemo(() => getCoreContext(), []);
    return <EchoGlobalContext.Provider value={providerPayload}>{children}</EchoGlobalContext.Provider>;
};
