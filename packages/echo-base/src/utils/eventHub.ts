import { EchoEventHub, UnsubscribeFunction } from '../types/event';

/**
 * Class for creating an eventHub to be used for emitting and subscribing to either
 * custom events or a predefined EchoEvent.
 * @class EventHub
 * @implements {EchoEventHub}
 */
class EventHub implements EchoEventHub {
    /**
     * Function for emitting (dispatching) an event on the window object.
     * @template T
     * @param {(string)} key EchoEvent identifier
     * @param {T} payload EchoEvent payload - either message string, an object with more details
     * @memberof EventHub
     */
    emit<T>(key: string, payload: T): void {
        const event = new CustomEvent(key, { detail: payload });
        window.dispatchEvent(event);
    }

    /**
     * Function for subscribing to an event.
     * Adds an event listener to the window object.
     * @template T
     * @param {(string)} key EchoEvent identifier
     * @param {(payload: T) => void} handler A function to handle a raised event
     * @return {*} Returns a cleanup function for unsubscribing to the event {() => void}
     * @memberof EventHub
     */
    subscribe<T>(key: string, handler: (payload: T) => void): UnsubscribeFunction {
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
     * @param {(Array<string>)} keys An Array of EchoEvent identifiers
     * @param {(payload: T) => void} handler A function to handle one of the raised events
     * @return {*} Returns cleanup function for unsubscribing from the subscribed events {() => void}
     * @memberof EventHub
     */
    subscribeMany<T>(keys: Array<string>, handler: (payload: T) => void): UnsubscribeFunction {
        const unsubscribeFunctions: Array<() => void> = keys.map((key) => this.subscribe(key, handler));
        return (): void => {
            unsubscribeFunctions.map((unsubscribe) => {
                unsubscribe();
            });
        };
    }
}
export const eventHub = new EventHub();
