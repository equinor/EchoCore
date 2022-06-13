import { AnalyticsPropertyTypes } from '.';
import { obfuscateUser } from './analyticsLogic';
import {
    addGlobalAnalyticsProperty,
    AnalyticsModule,
    analyticsSetInstCode,
    analyticsSetUserCompany
} from './analyticsModule';
import {
    addTelemetryNameFilter,
    enableLogTelemetryToConsole,
    removeTelemetryNameFilter
} from './analyticsTelemetryFilter';
import { appInsightsInstance } from './appInsightWrapper';

function createAnalyticsModule(
    moduleShortName: string,
    args?: {
        staticEventProperties?: AnalyticsPropertyTypes;
        staticErrorProperties?: AnalyticsPropertyTypes;
    }
): AnalyticsModule {
    return new AnalyticsModule(moduleShortName, args);
}

export const analytics = {
    createAnalyticsModule
};

function setUser(userName: string, userId: string): void {
    const obfuscatedUser = obfuscateUser(userName, userId);
    appInsightsInstance().setAuthenticatedUserContext(obfuscatedUser.id, obfuscatedUser.domain, true);
}

export const analyticsConfiguration = {
    setUser,
    setInstCode: analyticsSetInstCode, //TODO delete after we have upgraded to new core and deleted this from echopedia
    setUserCompany: analyticsSetUserCompany,
    addGlobalAnalyticsProperty,
    addTelemetryNameFilter,
    removeTelemetryNameFilter,
    enableLogTelemetryToConsole
};
