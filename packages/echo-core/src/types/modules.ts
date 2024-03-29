import { BaseError, ErrorArgs } from '@equinor/echo-base';
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

type AppContext = Record<string, unknown>;

export class ModuleAppError extends BaseError {
    constructor(args: ErrorArgs) {
        super({ ...args, name: 'ModuleAppError' });
    }
}
