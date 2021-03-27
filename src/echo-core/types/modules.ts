import { Component } from 'react';
import { Panel } from './panel';

/**
 * module registered
 *
 * @export
 * @interface Module
 */
export interface Module {
    test: string;
}

export interface EchoApp {
    appKey: string;
    component?: Component;
    panels?: Panel[];
    context: AppContext;
}

type AppContext = {};
