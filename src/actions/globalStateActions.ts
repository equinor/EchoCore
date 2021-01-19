import { dispatch, readState } from '../state/globalActions';
import { CoreContext, getCoreContext } from '../state/globalState';
import { ApplicationManifest, GlobalState } from '../types';

/**
 * @return `ApplicationManifest` according to appKey if module is missing
 *  return is `undefined` and `Error` with `Application manifest is missing.` thrown.
 * @param appKey uniq application key.
 */
export function getAppManifest(appKey: string): ApplicationManifest | undefined {
    return readState(getCoreContext(), (state): ApplicationManifest | undefined => {
        const appManifest = state.modules.find((mod) => mod.appKey === appKey);
        if (appManifest) return appManifest;
        throw new Error('Application manifest is missing.');
    });
}

/**
 * Function Used for updating the modules global state.
 * @param moduleState Kan be any type of data, The module can provide its own state.
 * This state wil be over written when new module is mounted.
 */
export function setModuleState<T>(moduleState: T): void {
    dispatch(CoreContext, (state: GlobalState) => ({ ...state, moduleState }));
}
