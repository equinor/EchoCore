import { EchoEventHub, EchoEvents } from '../../types/eventHub';

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
     * @param {(string | EchoEvents)} key
     * @param {T} message
     * @memberof EventHub
     */
    emit<T>(key: string | EchoEvents, message: T): void {
        const event = new CustomEvent(key, { detail: message });
        window.dispatchEvent(event);
    }

    /**
     * Function for subscribing to an event.
     * Adds an event listener to the window object.
     * @template T
     * @param {(string | EchoEvents)} key
     * @param {(message: T) => void} handler
     * @return {*} Returns a cleanup function for unsubscribing to the event {() => void}
     * @memberof EventHub
     */
    subscribe<T>(key: string | EchoEvents, handler: (message: T) => void): () => void {
        const eventHandler = (e: Event): void => {
            const customEvent = e as CustomEvent;
            const message = customEvent.detail as T;
            handler(message);
        };
        window.addEventListener(key, eventHandler);
        return (): void => window.removeEventListener(key, eventHandler, false);
    }
}
const eventHub = new EventHub();

export default eventHub;
