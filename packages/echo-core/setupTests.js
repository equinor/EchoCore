const mGetRandomValues = jest.fn().mockReturnValueOnce(new Uint32Array(10));

jest.mock('@microsoft/applicationinsights-web', () => {
    return {
        ApplicationInsights: class MockClass {
            loadAppInsights = jest.fn();
            addTelemetryInitializer = jest.fn();
            trackPageView = jest.fn();
        },
        SeverityLevel: {
            Verbose: 0,
            Information: 1,
            Warning: 2,
            Error: 3,
            Critical: 4
        }
    };
});

Object.defineProperty(window, 'fetch', {
    value: jest.fn()
});

Object.defineProperty(window.console, 'error', {
    value: jest.fn()
});

Object.defineProperty(window.console, 'warn', {
    value: jest.fn()
});

Object.defineProperty(window, 'crypto', {
    value: { getRandomValues: mGetRandomValues }
});

jest.mock('../echo-base/src/errors/randomHelper', () => {
    return {
        randomId: jest.fn(() => 'mocked-static-id-9999')
    };
});
