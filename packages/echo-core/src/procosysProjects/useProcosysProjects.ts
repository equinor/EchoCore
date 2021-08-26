import { useGlobalState } from '../state/useGlobalState';
import { ProcosysProjectCode, ProcosysProjectsData } from '../types/procosysProjects';

/**
 * Hook for returning procosysProjectData from the global state.
 * @export
 * @return {*}  {ProcosysProjectsData}
 */
export function useProcosysProjectsData(): ProcosysProjectsData {
    const { procosysProjectsData } = useGlobalState();
    return procosysProjectsData;
}

/**
 * Hook for returning list of procosys projects from the global state.
 * @export
 * @return {*}  {string[]}
 */
export function useProcosysProjects(): ProcosysProjectCode[] {
    return useProcosysProjectsData().procosysProjects;
}
