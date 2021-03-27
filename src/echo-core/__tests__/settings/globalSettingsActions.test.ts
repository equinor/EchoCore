import { getSettings, getSettingsByKey, setSetting, updateSettingByKey } from '../../settings/globalSettingsActions';
import { legendOptions, settings } from '../../state/defaultStates';
import { dispatch } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';
import { GlobalState } from '../../types';
import { ActivePanel } from '../../types/panel';

beforeEach(() => {
    initialize();
});

const globalInit: GlobalState = {
    modules: [],
    panels: [],
    ui: {},
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
        it('showTextHighlighting should equal true', () => {
            updateSettingByKey('showTextHighlighting', true);
            const result = getSettings();
            expect(result.showTextHighlighting).toBe(true);
        });
    });

    describe('updateSettingByKey', () => {
        it('showTextHighlighting should equal true', () => {
            setSetting({ showTextHighlighting: true });
            const result = getSettings();
            expect(result.showTextHighlighting).toBe(true);
        });
    });
    describe('updateSettingByKey', () => {
        it('showTextHighlighting should equal true', () => {
            setSetting({ showTextHighlighting: true });
            const result = getSettings();
            expect(result.showTextHighlighting).toBe(true);
        });
    });

    describe('updateSettingByKey', () => {
        it('showTextHighlighting and selectedInstCode should equal true and JSV', () => {
            setSetting({
                showTextHighlighting: true,
                plantSettings: { instCode: 'JSV', sapPlantId: 'JSV', plantName: 'JSV', proCoSysPlantId: 'JSV' }
            });
            const result = getSettings();
            expect(result.showTextHighlighting).toBe(true);
            expect(result.plantSettings.instCode).toBe('JSV');
        });
    });

    describe('getSettingsByKey', () => {
        it('should return settings by key', () => {
            setSetting({ showTextHighlighting: true });
            const result = getSettingsByKey('showTextHighlighting');
            expect(result).toBe(true);
        });
    });
});
