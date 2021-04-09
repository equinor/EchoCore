import { useContext, useEffect } from 'react';
import EchoEventHubContext, { EchoEventHubContextInterface } from '../contexts/EchoEventHubContext';
import { EchoEventHub, EchoEvents } from '../types/eventHub';

/**
 * The hook returns an instance of EchoEventHub provided by React context API
 * and allows to subscribe or emit respective events
 * @return {EchoEventHubContextInterface} Returns an instance of EchoEventHubContextInterface
 */
export function useEchoEventHub(): EchoEventHubContextInterface {
    return useContext(EchoEventHubContext);
}

/**
 * The hook exploits the EchoEventHub returned from the React context API
 * in order to subscribe provided handler function to a key or a list of keys
 * @template T
 * @param {(string | EchoEvents | Array<string | EchoEvents>)} keys An single value or an array of EchoEvent identifiers
 * @param {(payload: T) => void} handler A function to handle one of the raised events
 * @return {EchoEventHubContextInterface} Returns an instance of EchoEventHubContextInterface
 */
export function useEventSubscriber<T>(
    keys: string | EchoEvents | Array<string | EchoEvents>,
    handler: (message: T) => void
): EchoEventHub {
    const { eventHub } = useEchoEventHub();

    useEffect(() => {
        if (keys instanceof Array) {
            return eventHub.subscribeMany<T>(keys, handler);
        }
        return eventHub.subscribe<T>(keys, handler);
    }, [keys, handler, eventHub]);

    return eventHub;
}
