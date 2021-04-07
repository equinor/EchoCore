import { Component } from 'react';
import { Panel } from './panel';

/**
 * module registered
 *
 * @export
 * @interface AppModule
 */
export interface AppModule {
    name: string;
}

export interface EchoApp {
    appKey: string;
    component?: Component;
    panels?: Panel[];
    context: AppContext;
}

type AppContext = {};
