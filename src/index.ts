import { EnvironmentVariables } from './configuration/environment';
import Core from './Core';
import Env from './Env';
export { readModuleState, updateModuleState, updateSpecificModuleState } from './actions/moduleState';
export { default as useAppModuleState } from './hooks/useAppModuleState';
export { default as useCleanup } from './hooks/useCleanup';
export { default as useInitial } from './hooks/useInitial';
export { default as usePanels } from './hooks/usePanels';
export * from './observers/classObserver';
export { default as PanelHandler } from './panels/corePanels';
export { AuthenticationProvider } from './services/authentication/authProvider';
export { BaseClient } from './services/baseClient.ts/baseClient';
export * from './settings';
export * from './types';
export { makeUniqBy } from './utils/uniq';

export const EchoEnv = new Env();
const EchoCore = new Core();

export default EchoCore;

declare global {
    interface Window {
        _env_: EnvironmentVariables;
    }
}
