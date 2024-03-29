import { BaseError } from '@equinor/echo-base';
import { EchoEnv } from '../../EchoEnv';
import { appWithModuleName, eventNameToString } from './analyticsLogic';
import { AnalyticsEvent, AnalyticsEventName, AnalyticsPropertyTypes } from './analyticsTypes';
import { appInsightsInstance } from './appInsightWrapper';
import { errorToExceptionTelemetry } from './errorToExceptionTelemetry';
import OfflineTracker from './offlineTracker';

// Based on Client Analytics Strategy
// https://github.com/equinor/Echo/pull/14/files#diff-1e78f3b1fd220c5050d7497a73068a5e
// Examples:
// echo.AssetModel.Unloaded
// echo.AssetModel.Loaded
// ep.Document.Loaded
// ep_xld.Documented.Opened <-- Module xld in app/service ep opened a document
// - Object
//   - The object that has an action performed. Such as `AssetModel` and `MeasuringTool`, they should be generic. We do **not** want both `echo.AssetModelJohanSverdrup.Loaded` and `echo.AssetModelGudrun.Loaded`. Separating which context the event was in will be a part of the **event data**.
// - Action
//   - The action performed on the event. This is written in past tense. (Viewed, Disabled, Enabled, Started, etc)

let instCode = '';
let userCompany = '';
const globalAnalyticsProperties: AnalyticsPropertyTypes = {};

/**
 * Sets a global property which is logged with all events and errors
 * @param property.key the property name to be logged
 * @param property.value the value of the property
 */
export function addGlobalAnalyticsProperty(property: { key: string; value: string | number | boolean }): void {
    globalAnalyticsProperties[property.key] = property.value;
}

/**
 * Sets the instCode logged with all events, set globally for analytics modules
 * @param plantInstCode instCode logged with all events
 * @deprecated use addGlobalAnalyticsProperty instead
 */
export function analyticsSetInstCode(plantInstCode: string): void {
    instCode = plantInstCode;
}

/**
 * Sets the company logged with all events, set globally for analytics modules
 * @param company company logged with all events
 */
export function analyticsSetUserCompany(company: string): void {
    userCompany = company.toUpperCase().startsWith('X-') ? company.substring(2) : 'Equinor';
}

/**
 * Analytics module used to log data to application Insight
 */
export class AnalyticsModule {
    moduleName: string;
    offlineTracker: OfflineTracker;
    staticEventProperties?: AnalyticsPropertyTypes;
    staticErrorProperties?: AnalyticsPropertyTypes;
    constructor(
        moduleName: string,
        args?: { staticEventProperties?: AnalyticsPropertyTypes; staticErrorProperties?: AnalyticsPropertyTypes }
    ) {
        this.moduleName = moduleName;
        this.staticEventProperties = args?.staticEventProperties;
        this.staticErrorProperties = args?.staticErrorProperties;

        const offlineThresholdSeconds = 20;
        this.offlineTracker = new OfflineTracker(offlineThresholdSeconds, !navigator.onLine);
        window.addEventListener('online', () => this.trackOnline());
        window.addEventListener('offline', () => this.trackOffline());
    }

    private trackOnline(): void {
        const offlineEvent = this.offlineTracker.setOnline();
        if (offlineEvent) {
            this.trackEventBy(offlineEvent.object, offlineEvent.action, {
                minutesOffline: offlineEvent.minutesOffline,
                actionsPerformed: offlineEvent.actionsPerformed
            });
        }
    }

    private trackOffline(): void {
        this.offlineTracker.setOffline();
    }

    trackEventBy(objectName: string, actionName: string, properties: AnalyticsPropertyTypes): void {
        this.trackEvent(this.createEventLog(objectName, actionName, properties));
    }

    trackEvent(event: AnalyticsEvent): void {
        this.offlineTracker.addOfflineAction(eventNameToString(this.moduleName, event.eventName));

        const payload = this.createAnalyticsPayload(event);

        if (!EchoEnv.isProduction()) {
            if (EchoEnv.env().REACT_APP_LOGGER_ACTIVE) {
                console.log('appInsightsLog: ', eventNameToString(this.moduleName, event.eventName), payload);
            }
            return;
        }

        appInsightsInstance().trackEvent({ name: eventNameToString(this.moduleName, event.eventName) }, payload);
    }

    createAnalyticsPayload(event: AnalyticsEvent): AnalyticsPropertyTypes {
        return {
            ...event.properties,
            ...this.staticEventProperties,
            instCode,
            userCompany,
            ...globalAnalyticsProperties,
            sessionKey,
            moduleName: this.moduleName,
            isOnline: navigator.onLine,
            context: event.eventName.objectName,
            appVersion: 'Echopedia v' + EchoEnv.env().REACT_APP_AZURE_BUILD_NUMBER
        };
    }

    logError(error: Error | BaseError): void {
        if (error instanceof BaseError) {
            if (error.hasBeenLogged) {
                return;
            }
            error.hasBeenLogged = true;
        }

        if (EchoEnv.isDevelopment()) {
            console.error(error);
            console.log('with properties:');
            console.log({ ...error });
        } else {
            const exceptionTelemetry = errorToExceptionTelemetry({
                error,
                sessionKey,
                instCode,
                userCompany,
                moduleName: appWithModuleName(this.moduleName),
                staticErrorProperties: { ...this.staticErrorProperties, ...globalAnalyticsProperties }
            });
            appInsightsInstance().trackException(exceptionTelemetry);
        }
    }

    createEventLog(objectName: string, actionName: string, data: AnalyticsPropertyTypes): AnalyticsEvent {
        return {
            eventName: this.eventName(objectName, actionName),
            properties: data
        } as AnalyticsEvent;
    }

    private eventName(objectName: string, actionName: string): AnalyticsEventName {
        return { objectName: objectName, actionName: actionName };
    }
}

const sessionKey = uuidv4();

function uuidv4(): string {
    return `Echopedia-web-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
