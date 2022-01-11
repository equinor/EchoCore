/**
 * interface for the EventHub to be used for emitting and subscribing to either
 * custom events or a predefined EchoEvent.
 * @interface EchoEventHub
 */
export interface EchoEventHub {
    emit<T>(key: string, payload: T): void;
    subscribe<T>(key: string, handler: (payload: T) => void): UnsubscribeFunction;
    subscribeMany<T>(keys: Array<string>, handler: (payload: T) => void): UnsubscribeFunction;
}

export type UnsubscribeFunction = () => void;

// TODO: Remove this one with the next major release - moved to EchoCore to make Base more generic.
export enum EchoEvents {
    PlantChanged = 'plantChanged',
    ProcosysProjectChanged = 'procosysProjectChanged',
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
