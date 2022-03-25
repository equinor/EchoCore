import { ComponentType } from 'react';
// import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Without } from './common';

/**
 * Possible shapes for a component.
 */
export type AnyComponent<T> = ComponentType<T>;

export type WrappedComponent<TProps> = ComponentType<Without<TProps, keyof BaseAppComponentProps>>;

/**
 * The props that every registered App component obtains.
 */
export interface RouteBaseProps<UrlParams = unknown, UrlState = unknown>
    extends RouteComponentProps<UrlParams, Record<string, unknown>, UrlState>,
        BaseAppComponentProps {}

/**
 * The Base Components Props obtained by avery app.
 */
export interface BaseAppComponentProps {
    name?: string;
    // this Interface needs better definement.
}
