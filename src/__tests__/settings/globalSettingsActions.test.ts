import { getSettings, getSettingsByKey, setSetting, updateSettingByKey } from '../../settings/globalSettingsActions';
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

describe('globalSettingsActions', () => {
    describe('updateSettingByKey', () => {
        it('hasAcceptedTerms should equal true', () => {
            updateSettingByKey('hasAcceptedTerms', true);
            const result = getSettings();
            expect(result.hasAcceptedTerms).toBe(true);
        });
    });

    describe('updateSettingByKey', () => {
        it('hasAcceptedTerms should equal true', () => {
            setSetting({ hasAcceptedTerms: true });
            const result = getSettings();
            expect(result.hasAcceptedTerms).toBe(true);
        });
    });
    describe('updateSettingByKey', () => {
        it('hasAcceptedTerms should equal true', () => {
            setSetting({ hasAcceptedTerms: true });
            const result = getSettings();
            expect(result.hasAcceptedTerms).toBe(true);
        });
    });

    describe('updateSettingByKey', () => {
        it('hasAcceptedTerms and selectedInstCode should equal true and JSV', () => {
            setSetting({ hasAcceptedTerms: true, instCode: 'JSV' });
            const result = getSettings();
            expect(result.hasAcceptedTerms).toBe(true);
            expect(result.instCode).toBe('JSV');
        });
    });

    describe('getSettingsByKey', () => {
        it('should return settings by key', () => {
            setSetting({ hasAcceptedTerms: true });
            const result = getSettingsByKey('hasAcceptedTerms');
            expect(result).toBe(true);
        });
    });
});
