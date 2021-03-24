import type { RouteComponentProps } from 'react-router';
import { AnyComponent } from './components';
import { Panel } from './panel';
import { AppMetaData } from './state';

export interface EchoApi {
    registerApp: <Key extends string>(
        name: Key,
        Component: AnyComponent<AppComponentProps>,
        meta?: AppMetaData
    ) => void;
    unRegisterApp: <Key extends string>(name: Key) => void;
    registerPanels: <Key extends string>(key: Key, panels: Panel | Array<Panel>) => void;
    unRegisterPanes: <Key extends string>(key: Key) => void;
}

/**
 * The props used by a App component.
 */
export type AppComponentProps<T = unknown, S = unknown> = RouteBaseProps<T, S>;

/**
 * The props that every registered App component obtains.
 */
export interface RouteBaseProps<UrlParams = unknown, UrlState = unknown>
    extends RouteComponentProps<UrlParams, {}, UrlState>,
        BaseAppComponentProps {}

/**
 * The Base Components Props obtained by avery app.
 */
export interface BaseAppComponentProps {
    name?: string;
    // this Interface needs better definement.
}
