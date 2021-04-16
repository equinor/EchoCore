/**
 * interface for the EventHub to be used for emitting and subscribing to either
 * custom events or a predefined EchoEvent.
 * @interface EchoEventHub
 */
export interface EchoEventHub {
    emit<T>(key: string, payload: T): void;
    subscribe<T>(key: string, handler: (payload: T) => void): () => void;
    subscribeMany<T>(keys: Array<string | EchoEvents>, handler: (payload: T) => void): () => void;
}

export enum EchoEvents {
    PlantChanged = 'plantChanged'
}


/**
 * Emitter of module app shell events. 
 */
 export interface ModuleEventEmitter {
    /**
     * Attaches a new event listener.
     * @param type The type of the event to listen for.
     * @param callback The callback to trigger.
     */
    on<K extends keyof EventMap>(type: K, callback: Listener<EventMap[K]>): ModuleEventEmitter;
    /**
     * Detaches an existing event listener.
     * @param type The type of the event to listen for.
     * @param callback The callback to trigger.
     */
    of<K extends keyof EventMap>(type: K, callback: Listener<EventMap[K]>): ModuleEventEmitter;
    /**
     * Emits a new event with the given type.
     * @param type The type of the event to emit.
     * @param arg The payload of the event.
     */
    emit<K extends keyof EventMap>(type: K, arg: EventMap[K]): ModuleEventEmitter;
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

