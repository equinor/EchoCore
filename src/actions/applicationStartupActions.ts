import { setSetting } from '../settings/globalSettingsActions';
import { ApplicationStartup } from '../types/applicationStartup';

const applicationStartup: ApplicationStartup = {
    setHasAcceptedTerms(hasAcceptedTerms: boolean): void {
        setSetting({ hasAcceptedTerms });
    },

    setHasDoneOnboarding(hasDoneOnboarding: boolean): void {
        setSetting({ hasDoneOnboarding });
    }
};

export default applicationStartup;
