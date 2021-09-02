import { AnalyticsModule, analyticsSetInstCode, analyticsSetUserCompany } from './analyticsModule';
import { obfuscateUser } from './appInSightsLogic';
import { appInsightsInstance } from './appInsightWrapper';

function createAnalyticsModule(moduleShortName: string): AnalyticsModule {
    return new AnalyticsModule(moduleShortName);
}

export const analytics = {
    createAnalyticsModule
};

function appInsightsSetUser(userName: string, userId: string): void {
    const obfuscatedUser = obfuscateUser(userName, userId);
    appInsightsInstance.setAuthenticatedUserContext(obfuscatedUser.id, obfuscatedUser.domain, true);
}

export const analyticsConfiguration = {
    appInsightsSetUser,
    analyticsSetInstCode,
    analyticsSetUserCompany
};
