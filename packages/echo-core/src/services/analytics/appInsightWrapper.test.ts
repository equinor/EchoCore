import { appInsightsInstance } from './appInsightWrapper';

jest.mock('../../configuration/environment', () => {
    return {
        env: jest.fn().mockImplementation(() => {
            return {
                REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY: 'mocked_key'
            };
        }),
        isDevelopment: jest.fn().mockReturnValue(() => {
            return false;
        })
    };
});

jest.mock('@microsoft/applicationinsights-web', () => {
    return {
        ApplicationInsights: class MockClass {
            loadAppInsights = jest.fn();
            addTelemetryInitializer = jest.fn();
            trackPageView = jest.fn();
        }
    };
});

describe('appInsightsInstance', () => {
    it('should return same instance each time', () => {
        const instance1 = appInsightsInstance();
        const instance2 = appInsightsInstance();
        expect(instance1).toEqual(instance2);
    });
});
