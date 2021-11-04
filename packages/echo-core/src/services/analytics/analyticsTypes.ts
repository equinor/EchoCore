import { ITelemetryItem } from '.';

export type AnalyticsPropertyTypes = { [key: string]: string | number | boolean | string[] };

export interface AnalyticsEvent {
    eventName: AnalyticsEventName;
    properties: AnalyticsPropertyTypes;
}

export interface AnalyticsEventName {
    objectName: string;
    actionName: string;
}

export interface AnalyticsNameFilterFunction {
    shouldExclude: (name: string, telemetryItem: ITelemetryItem) => boolean;
}
