import { ComponentType } from 'react';
import { BaseComponentProps } from './api';
import { Without } from './common';

/**
 * Possible shapes for a component.
 */
export type AnyComponent<T> = ComponentType<T>;

export type WrappedComponent<TProps> = ComponentType<Without<TProps, keyof BaseComponentProps>>;
