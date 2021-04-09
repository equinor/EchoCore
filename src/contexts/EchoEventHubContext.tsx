import { createContext } from 'react';
import { EchoEventHub } from '../types/eventHub';

export interface EchoEventHubContextInterface {
    eventHub: EchoEventHub;
}

export default createContext<EchoEventHubContextInterface>({
    eventHub: {} as EchoEventHub
});
