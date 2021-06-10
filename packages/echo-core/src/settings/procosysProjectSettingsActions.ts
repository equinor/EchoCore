import { readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { ProcosysProject } from '../types/procosysProjects';
import { setSetting } from './globalSettingsActions';
import { persistEchoSetting } from './persistEchoSetting';

/**
 * Used for setting or updating the selected procosys project.
 *
 * @export Function from Echo Core.
 * @param {ProcosysProjectSettings} procosysProjectSettings selected procosys project data object.
 */
export function setSelectedProcosysProject(procosysProjectSettings: ProcosysProject): void {
    setSetting({ procosysProjectSettings });
    persistEchoSetting.persistSettingsInLocalStorage({ procosysProjectSettings });
}

/**
 * Used from retrieving the selected procosys project.
 *
 * @export Function from Echo Core.
 * @return {*}  {string}
 */
export function getSelectedProcosysProject(): ProcosysProject {
    return readState(getCoreContext(), (state) => {
        return state.settings.procosysProjectSettings;
    });
}

/**
 * Used for retrieving the selected procosys project code.
 *
 * @export Function from Echo Core.
 * @return {*}  {string}
 */
export function getProcosysProjectCode(): string {
    return getSelectedProcosysProject().projectCode;
}
