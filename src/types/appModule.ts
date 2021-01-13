import { Component } from 'react';
import { Panel } from './panel';

export interface ApplicationManifest {
    appKey: string;
    component?: Component;
    panels?: Panel[];
    context: AppContext;
}

type AppContext = {};
