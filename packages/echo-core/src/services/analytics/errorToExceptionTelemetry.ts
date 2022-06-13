import {
    BaseError,
    ForbiddenError,
    getAllProperties,
    NetworkError,
    UnauthorizedError,
    ValidationError
} from '@equinor/echo-base';
import { IExceptionTelemetry, SeverityLevel } from '@microsoft/applicationinsights-web';
import { AnalyticsPropertyTypes } from '.';

export function errorToExceptionTelemetry(args: {
    error: Error | BaseError;
    sessionKey: string;
    moduleName: string;
    instCode: string;
    userCompany: string;
    staticErrorProperties?: AnalyticsPropertyTypes;
}) {
    const error = args.error;

    const errorType = error.name ? error.name : 'unknown';
    const message = error.message ? error.message : '';
    const allProperties = getAllProperties(error);

    return {
        exception: error,
        severityLevel: getErrorSeverity(error),
        properties: {
            instCode: args.instCode,
            userCompany: args.userCompany,
            ...allProperties,
            ...args.staticErrorProperties,
            sessionKey: args.sessionKey,
            moduleName: args.moduleName,
            errorType,
            message
        }
    } as IExceptionTelemetry;
}

/**
 * Divided like this to easily filter away unwanted network calls in appInsight.
 */
function getErrorSeverity(error: Error): SeverityLevel {
    if (error instanceof ForbiddenError) return SeverityLevel.Verbose;
    if (error instanceof UnauthorizedError) return SeverityLevel.Verbose;
    if (error instanceof ValidationError) return SeverityLevel.Information;
    if (error instanceof NetworkError) return SeverityLevel.Warning;
    return SeverityLevel.Error;
}
