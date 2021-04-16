import { AppComponentProps } from './api';
import { Dict } from './common';
import { WrappedComponent } from './components';
import { Panel } from './panel';

/**
 * The Echo global app sub-state container for registering application components.
 */
export interface RegistryState {
    /**
     * The registered app components for the router.
     */
    routes: Dict<RouteRegistration>;
    panels: Dict<Array<Panel>>;
    appLinks: Dict<AppLink>;
}

export interface AppLink extends AppLinkOptions {
    tile: string;
    icon: string;
    uri: string;
}

export interface AppLinkOptions {
    altText?: string;
    homeScreen?: boolean;
    appMenu?: boolean;
    params?: string;
    eventTracker?: EventTracker;
    nativeMessage?: NativeMessage;
    online?: boolean;
}

type propertyTypes = { [key: string]: string | number | boolean | string[] };

export type EventTracker = (objectName: string, actionName: string, properties: propertyTypes) => void;

export interface NativeMessage {
    messageType: string;
    messageValue: boolean;
}

export interface RouteRegistration extends BaseRegistration {
    component: WrappedComponent<AppComponentProps>;
    meta: AppMetaData;
}

export interface BaseRegistration {
    key: string;
}

export interface AppMetaData {
    title: string;
}

export type AppKey = string;
