/**
 * interface for the EventHub to be used for emitting and subscribing to either
 * custom events or a predefined EchoEvent.
 * @interface EchoEventHub
 */
export interface EchoEventHub {
    emit<T>(key: string, payload: T): void;
    subscribe<T>(key: string, handler: (payload: T) => void): UnsubscribeFunction;
    subscribeMany<T>(keys: Array<string | EchoEvents>, handler: (payload: T) => void): UnsubscribeFunction;
}

export type UnsubscribeFunction = () => void;

export enum EchoEvents {
    PlantChanged = 'plantChanged',
    Toaster = 'toaster'
}

export interface EventMap {
    [custom: string]: unknown;
}

/**
 * Listener for module app shell events.
 */
export interface Listener<T> {
    /**
     * Receives an event of type T.
     */
    (arg: T): void;
}
