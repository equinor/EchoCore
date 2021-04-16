import { getSettings, getSettingsByKey, setSetting, updateSettingByKey } from '../../settings/globalSettingsActions';
import defaultGlobalState from '../../state/defaultStates';
import { dispatch } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';

beforeEach(() => {
    initialize();
});

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
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
                plantSettings: {
                    instCode: 'JSV',
                    sapPlantId: 'JSV',
                    plantName: 'JSV',
                    proCoSysPlantId: 'JSV',
                    hasTr2000: true
                }
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
