import { setLegendOption } from './actions/legendOptionsStateActions';
import registerPanels from './actions/registerPanel';
import { isDevelopment, isProduction } from './configuration/environment';
import useAppModuleState from './hooks/useAppModuleState';
import useLegendOptions from './hooks/useLegendOptions';
import { ECHO_CORE_MAIN, ECHO_CORE_SEARCH } from './panels/corePanels';

export { readModuleState, updateModuleState, updateSpecificModuleState } from './actions/moduleState';
export { default as useAppModuleState } from './hooks/useAppModuleState';
export { default as useCleanup } from './hooks/useCleanup';
export { default as useInitial } from './hooks/useInitial';
export { default as usePanels } from './hooks/usePanels';
export * from './observers/classObserver';
export { default as PanelHandler } from './panels/corePanels';
export * from './types';
export { makeUniqBy } from './utils/uniq';

class Core {
    registerPanels = registerPanels;
    useAppModuleState = useAppModuleState;
    useLegendOptions = useLegendOptions;
    setLegendOption = setLegendOption;
    ECHO_CORE_MAIN = ECHO_CORE_MAIN;
    ECHO_CORE_SEARCH = ECHO_CORE_SEARCH;
}

class Env {
    isDevelopment = isDevelopment;
    isProduction = isProduction;
}

export const EchoEnv = new Env();
const EchoCore = new Core();

export default EchoCore;
