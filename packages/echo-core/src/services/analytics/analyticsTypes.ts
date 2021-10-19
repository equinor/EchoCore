export type AnalyticsPropertyTypes = { [key: string]: string | number | boolean | string[] };

export interface AnalyticsEvent {
    eventName: AnalyticsEventName;
    properties: AnalyticsPropertyTypes;
}

export interface AnalyticsEventName {
    objectName: string;
    actionName: string;
}

export interface AnalyticsNameFilterFunc {
    shouldExclude: (name: string) => boolean;
}