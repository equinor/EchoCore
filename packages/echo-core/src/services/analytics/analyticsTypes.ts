export type propertyTypes = { [key: string]: string | number | boolean | string[] };

export interface AnalyticsEvent {
    eventName: EventName;
    properties: propertyTypes;
}

export interface EventName {
    objectName: string;
    actionName: string;
}
