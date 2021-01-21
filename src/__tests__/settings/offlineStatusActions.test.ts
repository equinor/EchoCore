import {
    getAllOfflineStatus,
    getOfflineStatus,
    setOfflineStatus,
    setSettingsItems
} from '../../settings/offlineStatusActions';
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

const settingsItem = {
    settingsKey: 'key',
    isDefault: false,
    syncOffline: false,
    enable: false
};

describe('offlineStatusActions', () => {
    describe('setOfflineStatus and getAllOfflineStatus', () => {
        it('should fine new settings item', () => {
            setOfflineStatus(settingsItem);
            expect([settingsItem]).toEqual(getAllOfflineStatus());
        });
    });
    describe('setSettingsItems', () => {
        it('should add settingsItem', () => {
            const items = [];
            const expected = [settingsItem];
            const newSettingsItems = setSettingsItems(items, settingsItem);
            expect(expected).toEqual(newSettingsItems);
        });

        it('should return updated settingsItem', () => {
            const items = [settingsItem];
            settingsItem.isDefault = true;
            const newSettingsItem = setSettingsItems(items, settingsItem);
            expect([settingsItem]).toEqual(newSettingsItem);
            settingsItem.isDefault = false;
        });
    });

    describe('getOfflineStatus', () => {
        it('should get specific settings item', () => {
            setOfflineStatus(settingsItem);
            const newItem = { ...settingsItem, settingsKey: 'key2' };
            setOfflineStatus(newItem);
            const result = getOfflineStatus('key2');

            expect(newItem.settingsKey).toEqual(result?.settingsKey);
        });
        it('should trow Error', () => {
            expect(() => {
                getOfflineStatus('key3');
            }).toThrow('Invalid Settings key.');
        });
    });
});
