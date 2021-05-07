import { EnvironmentVariables } from './configuration/environment';
import { EchoCore } from './EchoCore';
export * from '@azure/msal-browser';
export { EchoEvents, storage } from '@equinor/echo-base';
export type { ErrorProperties } from '@equinor/echo-base';
export * from '@equinor/echo-base/lib/errors';
export type { BaseErrorArgs, CommonErrorArgs } from '@equinor/echo-base/lib/types/error';
export * from './actions';
export * from './actions/moduleState';
export * from './contexts';
export * from './Env';
export * from './hooks';
export * from './modules';
export * from './observers/classObserver';
export * from './plants/usePlants';
export * from './providers';
export * from './services/authentication/authProvider';
export * from './services/baseClient/baseClient';
export * from './settings';
export * from './state';
export * from './types';
export * from './utils/uniq';

export default EchoCore;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}
