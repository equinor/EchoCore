import { ApplicationStartup, GetStartup } from '../types/applicationStartup';
import { getSettings, setSetting } from './globalSettingsActions';

const onboarding: ApplicationStartup = {
    setHasAcceptedTerms(hasAcceptedTerms: boolean): void {
        setSetting({ hasAcceptedTerms });
    },

    setHasDoneOnboarding(hasDoneOnboarding: boolean): void {
        setSetting({ hasDoneOnboarding });
    },
    get(): GetStartup {
        const { hasDoneOnboarding, hasAcceptedTerms } = getSettings();
        return { hasDoneOnboarding, hasAcceptedTerms };
    }
};

export default onboarding;
