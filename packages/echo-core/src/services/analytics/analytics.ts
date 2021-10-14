import { obfuscateUser } from './analyticsLogic';
import { AnalyticsModule, analyticsSetInstCode, analyticsSetUserCompany } from './analyticsModule';
import { appInsights } from './appInsightWrapper';

function createAnalyticsModule(moduleShortName: string): AnalyticsModule {
    return new AnalyticsModule(moduleShortName);
}

export const analytics = {
    createAnalyticsModule
};

function setUser(userName: string, userId: string): void {
    const obfuscatedUser = obfuscateUser(userName, userId);
    appInsights().setAuthenticatedUserContext(obfuscatedUser.id, obfuscatedUser.domain, true);
}

export const analyticsConfiguration = {
    setUser,
    setInstCode: analyticsSetInstCode,
    setUserCompany: analyticsSetUserCompany
};
