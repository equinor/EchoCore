import { AppComponentProps } from './api';
import { WrappedComponent } from './components';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SingleAppMetadata {
    name: string;
    link: string;
    requireRef: string;
    integrity?: string;
    custom?: any;
    config?: Record<string, any>;
}
export interface MultiAppsMetadata {
    name: string;
    link: string;
    bundle: string;
    integrity?: string;
    custom?: any;
}

export type App = SingleApp | MultiApp;
/**
 * Describes the metadata transported by a Apps.
 */
export type AppMetadata = SingleAppMetadata | MultiAppsMetadata;

export type SingleApp = AppData & AppMetadata;

export type MultiApp = MultiAppData & MultiAppsMetadata;

/**
 * Defines the API accessible from Apps.
 */
export interface AppApi extends EventEmitter {
    /**
     * Gets the metadata of the current App.
     */
    meta: AppMetadata;
    registerRoute: <TKey extends string>(key: TKey, route: RouteRegistration) => void;
    unRegisterRoute: <TKey extends string>(key: TKey) => void;
    getRoutesData: () => Readonly<RouteRegistration[]>;
    useRoutes: () => RouteRegistration[];
}

export interface RouteRegistration extends BaseRegistration {
    component: WrappedComponent<AppComponentProps>;
    meta: AppMetaData;
}

export interface AppMetaData {
    name: string;
    icon: string;
    homeScreen?: boolean;
}

export interface BaseRegistration {
    key: string;
}

export interface AppData {
    setup: (api: AppApi) => void | Promise<void>;
}
export interface MultiAppData {
    setup: (apiFactory: AppApiCreator) => void | Promise<void>;
}

export interface EchoPortal {
    isAuthenticated: boolean;
}

export type AppMetaFetch = () => Promise<AppMetadata[]>;

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

/**
 * The creator function for the App API.
 */
export interface AppApiCreator {
    (target: AppMetadata): AppApi;
}

/**
 * The record containing all available dependencies.
 */
export interface AvailableDependencies {
    [name: string]: any;
}
