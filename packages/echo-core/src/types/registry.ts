import { AppComponentProps } from './api';
import { Dict } from './common';
import { WrappedComponent } from './components';
import { EchoPanel } from './panel';

/**
 * The Echo global app sub-state container for registering application components.
 */
export interface RegistryState {
    /**
     * The registered app components for the router.
     */
    routes: Dict<RouteRegistration>;
    panels: Dict<EchoPanel>;
    appLinks: Dict<AppLink>;
}

export interface AppLink extends AppLinkOptions {
    name: string;
    icon: string;
    path: string;
    description?: string;
}

export interface AppLinkOptions {
    shortName?: string;
    homeScreen?: boolean;
    mainMenu?: boolean;
    params?: string;
    eventTracker?: EventTracker;
    isVisible?: () => boolean;
    nativeMessage?: NativeMessage;
    online?: boolean;
}

type propertyTypes = { [key: string]: string | number | boolean | string[] };

export type EventTracker = (objectName: string, actionName: string, properties: propertyTypes) => void;

export interface NativeMessage {
    messageType: string;
    messageValue: boolean;
}

export interface RouteRegistration extends BaseRouteRegistration {
    component: WrappedComponent<AppComponentProps>;
}

export interface BaseRouteRegistration {
    layoutKey?: string;
    path: string;
    key: string;
}

export interface AppMetaData {
    title: string;
}

export type AppKey = string;
