import onboarding from '../../settings/applicationStartupActions';
import { getSettings } from '../../settings/globalSettingsActions';
import { legendOptions, settings } from '../../state/defaultStates';
import { dispatch } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';
import { ActivePanel } from '../../types/panel';

beforeEach(() => {
    initialize();
});

const globalInit = {
    modules: [],
    panels: [],
    activePanel: ActivePanel.None,
    activeModule: '',
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    legendOptions,
    settings
};

function initialize(): void {
    dispatch(getCoreContext(), () => globalInit);
}

describe('applicationStartupActions', () => {
    describe('setHasAcceptedTerms', () => {
        it('hasAcceptedTerms should equal true', () => {
            onboarding.setHasAcceptedTerms(true);
            const result = getSettings();
            expect(result.hasAcceptedTerms).toBe(true);
        });
    });

    describe('setHasDoneOnboarding', () => {
        it('hasDoneOnboarding should equal true', () => {
            onboarding.setHasDoneOnboarding(true);
            const result = getSettings();
            expect(result.hasDoneOnboarding).toBe(true);
        });
    });
});
