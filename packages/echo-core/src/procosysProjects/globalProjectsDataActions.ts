import { dispatch, readState } from '../actions/coreActions/globalActions';
import { getCoreContext } from '../state/globalState';
import { ProcosysProjectCode, ProcosysProjectsData } from '../types/procosysProjects';
import { GlobalState } from '../types/state';
import { persistProcosysProjectsData } from './persistProjectsData';

/**
 * Function for updating procosysProjectsData in global state.
 * @export
 * @param {Partial<ProcosysProjectsData>} partialProcosysProjectsData
 */
export function setProcosysProjectsData(partialProcosysProjectsData: Partial<ProcosysProjectsData>): void {
    const procosysProjectsData = { ...getProcosysProjectsData(), ...partialProcosysProjectsData };
    dispatch(getCoreContext(), (state: GlobalState) => {
        persistProcosysProjectsData.persistProcosysProjectsDataInLocalStorage(procosysProjectsData);
        return { ...state, procosysProjectsData };
    });
}

/**
 * Function for getting procosysProjectsData from the global state.
 * @export
 * @return {*}  {Readonly<ProcosysProjectsData>}
 */
export function getProcosysProjectsData(): Readonly<ProcosysProjectsData> {
    return readState(getCoreContext(), (state: GlobalState) => state.procosysProjectsData);
}

/**
 * Function for getting list of procosys projects from the global state.
 * @export
 * @return {*}  {Readonly<string[]>}
 */
export function getProcosysProjects(): Readonly<ProcosysProjectCode[]> {
    return getProcosysProjectsData().procosysProjects;
}
