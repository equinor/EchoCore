import { eventHub } from '@equinor/echo-base';
import React, { ReactNode, useMemo } from 'react';
import { EchoEventHubContext } from '../contexts/EchoEventHubContext';

interface EventHubProviderProps {
    children: ReactNode;
}

export const EventHubProvider: React.FC<EventHubProviderProps> = ({ children }) => {
    const providerPayload = useMemo(() => ({ eventHub }), []);
    return <EchoEventHubContext.Provider value={providerPayload}>{children}</EchoEventHubContext.Provider>;
};
