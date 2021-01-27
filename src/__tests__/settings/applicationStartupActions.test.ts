import applicationStartup from '../../settings/applicationStartupActions';
import { getSetting } from '../../settings/globalSettingsActions';
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
            applicationStartup.setHasAcceptedTerms(true);
            const result = getSetting();
            expect(result.hasAcceptedTerms).toBe(true);
        });
    });

    describe('setHasDoneOnboarding', () => {
        it('hasDoneOnboarding should equal true', () => {
            applicationStartup.setHasDoneOnboarding(true);
            const result = getSetting();
            expect(result.hasDoneOnboarding).toBe(true);
        });
    });
});
