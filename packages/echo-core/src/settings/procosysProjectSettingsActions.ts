import { readState } from '../actions/coreActions/globalActions';
import { getCoreContext } from '../state/globalState';
import { ProcosysProjectCode } from '../types/procosysProjects';
import { setSetting } from './globalSettingsActions';
import { persistEchoSetting } from './persistEchoSetting';

/**
 * Used for setting or updating the selected procosys project.
 *
 * @export Function from Echo Core.
 * @param {ProcosysProjectCode} selectedProcosysProject selected procosys project data object.
 */
export function setSelectedProcosysProject(selectedProcosysProject: ProcosysProjectCode): void {
    setSetting({ selectedProcosysProject });
    persistEchoSetting.persistSettingsInLocalStorage({ selectedProcosysProject });
}

/**
 * Used from retrieving the selected procosys project.
 *
 * @export Function from Echo Core.
 * @return {*}  {string}
 */
export function getSelectedProcosysProject(): ProcosysProjectCode {
    return readState(getCoreContext(), (state) => {
        return state.settings.selectedProcosysProject;
    });
}
