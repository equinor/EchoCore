import { EchoEventHub } from '@equinor/echo-base';
import { createContext } from 'react';

export interface EchoEventHubContextInterface {
    eventHub: EchoEventHub;
}

export default createContext<EchoEventHubContextInterface>({
    eventHub: {} as EchoEventHub
});
