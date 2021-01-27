import { ApplicationStartup } from '../types/applicationStartup';
import { setSetting } from './globalSettingsActions';

const onboarding: ApplicationStartup = {
    setHasAcceptedTerms(hasAcceptedTerms: boolean): void {
        setSetting({ hasAcceptedTerms });
    },

    setHasDoneOnboarding(hasDoneOnboarding: boolean): void {
        setSetting({ hasDoneOnboarding });
    }
};

export default onboarding;
