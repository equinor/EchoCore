import React, { ReactNode, useMemo } from 'react';
import EchoEventHubContext from '../contexts/EchoEventHubContext';
import eventHub from '../utils/eventHub';

interface EventHubProviderProps {
    children: ReactNode;
}

const EventHubProvider: React.FC<EventHubProviderProps> = ({ children }) => {
    const providerPayload = useMemo(() => ({ eventHub }), []);

    return <EchoEventHubContext.Provider value={providerPayload}>{children}</EchoEventHubContext.Provider>;
};

export default EventHubProvider;
