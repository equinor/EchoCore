import { EchoEventHub } from '@equinor/echo-base';
import { createContext } from 'react';

export interface EchoEventHubContextInterface {
    eventHub: EchoEventHub;
}

/**
 * React Context of the Echo EchoEventHub
 */
export const EchoEventHubContext = createContext<EchoEventHubContextInterface>({
    eventHub: {} as EchoEventHub
});
