import { EnvironmentVariables } from './configuration/environment';
import { EchoCore } from './EchoCore';
export * from '@azure/msal-browser';
export { EchoEvents, eventHub, storage } from '@equinor/echo-base';
export type { ErrorProperties } from '@equinor/echo-base';
export * from '@equinor/echo-base/lib/errors';
export type { BaseErrorArgs, CommonErrorArgs } from '@equinor/echo-base/lib/types/error';
export * from './actions';
export * from './actions/moduleState';
export type { EnvironmentVariables } from './configuration/environment';
export * from './contexts';
export * from './EchoEnv';
export * from './hooks';
export * from './modules';
export * from './observers/classObserver';
export * from './plants/usePlants';
export * from './procosysProjects';
export * from './providers';
export { analytics, analyticsConfiguration } from './services/analytics/analytics';
export { AnalyticsModule } from './services/analytics/analyticsModule';
export {
    AnalyticsEvent,
    AnalyticsEventName,
    AnalyticsNameFilterFunction,
    AnalyticsPropertyTypes
} from './services/analytics/analyticsTypes';
export * from './services/authentication/authProvider';
export * from './services/baseClient/baseClient';
export { RegisteredHookName } from './services/hookRegistry';
export * from './settings';
export * from './state';
export * from './types';
export * from './utils/deepLinkParams';
export * from './utils/uniq';

export default EchoCore;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}
