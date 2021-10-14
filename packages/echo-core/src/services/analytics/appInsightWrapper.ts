import {
    ApplicationInsights,
    ICustomProperties,
    IEventTelemetry,
    IExceptionTelemetry
} from '@microsoft/applicationinsights-web';
import { EchoEnv } from '../../EchoEnv';
import { obfuscateUser } from './analyticsLogic';

class AppInsightsWrapper {
    appInsights: ApplicationInsights;
    constructor(appInsightsInstrumentationKey: string) {
        this.appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: appInsightsInstrumentationKey,
                enableAutoRouteTracking: true,
                disableFetchTracking: false,
                disableExceptionTracking: false,
                disableTelemetry: false
            }
        });
        this.appInsights.loadAppInsights();
        this.appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageView
    }

    appInsightsSetUser(userName: string, userId: string): void {
        const obfuscatedUser = obfuscateUser(userName, userId);
        this.appInsights.setAuthenticatedUserContext(obfuscatedUser.id, obfuscatedUser.domain, true);
    }

    trackException(exception: IExceptionTelemetry): void {
        this.appInsights.trackException(exception);
    }

    trackEvent(event: IEventTelemetry, customProperties?: ICustomProperties | undefined): void {
        this.appInsights.trackEvent(event, customProperties);
    }

    setAuthenticatedUserContext(
        authenticatedUserId: string,
        accountId?: string | undefined,
        storeInCookie?: boolean | undefined
    ): void {
        this.appInsights.setAuthenticatedUserContext(authenticatedUserId, accountId, storeInCookie);
    }
}

let appInsightsInstance: undefined | AppInsightsWrapper = undefined;

export function appInsights(): AppInsightsWrapper {
    if (!appInsightsInstance)
        appInsightsInstance = new AppInsightsWrapper(EchoEnv.env().REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY);
    return appInsightsInstance;
}
