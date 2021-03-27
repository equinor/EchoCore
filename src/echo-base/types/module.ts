export interface EquinorModuleMeta {
    name: string;
}

export interface EquinorModuleData {
    setup: () => void | Promise<void>;
}

export type EquinorModule = EquinorModuleData & EquinorModuleMeta;

export interface EchoPortal {
    isAuthenticated: boolean;
}

export type ModulesMetaFetch = () => Promise<EquinorModuleMeta[]>;

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

/**
 * Emitter of module app shell events
 */
export interface EventEmitter {
    /**
     * Attaches a new event listener.
     * @param type The type of the event to listen for.
     * @param callback The callback to trigger.
     */
    on<K extends keyof EventMap>(type: K, callback: Listener<EventMap[K]>): EventEmitter;
    /**
     * Detaches an existing event listener.
     * @param type The type of the event to listen for.
     * @param callback The callback to trigger.
     */
    of<K extends keyof EventMap>(type: K, callback: Listener<EventMap[K]>): EventEmitter;
    /**
     * Emits a new event with the given type.
     * @param type The type of the event to emit.
     * @param arg The payload of the event.
     */
    emit<K extends keyof EventMap>(type: K, arg: EventMap[K]): EventEmitter;
}
