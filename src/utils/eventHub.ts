import { EchoEventHub, EchoEvents } from '../types/eventHub';

// TODO: Write tests
/**
 *
 * Class for creating an eventHub to be used for emitting and subscribing to either
 * custom events or a predefined EchoEvent.
 * @class EventHub
 * @implements {EchoEventHub}
 */
class EventHub implements EchoEventHub {
    /**
     * Function for emitting (dispatching) an event on the window object.
     * @template T
     * @param {(string | EchoEvents)} key EchoEvent identifier
     * @param {T} payload EchoEvent payload - either message string, an object with more details
     * @memberof EventHub
     */
    emit<T>(key: string | EchoEvents, payload: T): void {
        const event = new CustomEvent(key, { detail: payload });
        window.dispatchEvent(event);
    }

    /**
     * Function for subscribing to an event.
     * Adds an event listener to the window object.
     * @template T
     * @param {(string | EchoEvents)} key EchoEvent identifier
     * @param {(payload: T) => void} handler A function to handle a raised event
     * @return {*} Returns a cleanup function for unsubscribing to the event {() => void}
     * @memberof EventHub
     */
    subscribe<T>(key: string | EchoEvents, handler: (payload: T) => void): () => void {
        const eventHandler = (e: Event): void => {
            const customEvent = e as CustomEvent;
            const payload = customEvent.detail as T;
            handler(payload);
        };
        window.addEventListener(key, eventHandler);
        return (): void => window.removeEventListener(key, eventHandler, false);
    }

    /**
     * Function for subscribing to an array of events.
     * Adds an event listener to the window object.
     * @template T
     * @param {(Array<string | EchoEvents>)} keys An Array of EchoEvent identifiers
     * @param {(payload: T) => void} handler A function to handle one of the raised events
     * @return {*} Returns cleanup function for unsubscribing from the subscribed events {() => void}
     * @memberof EventHub
     */
    subscribeMany<T>(keys: Array<string | EchoEvents>, handler: (payload: T) => void): () => void {
        const eventListenerRemovers: Array<() => void> = keys.map((key) => this.subscribe(key, handler));
        return (): void => {
            eventListenerRemovers.map((removerFunction) => {
                removerFunction();
            });
        };
    }
}
const eventHub = new EventHub();

export default eventHub;
