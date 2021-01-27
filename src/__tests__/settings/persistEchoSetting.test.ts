import { PersistEchoSetting } from '../../settings/persistEchoSetting';
import { settings } from '../../state/defaultStates';
import { Settings } from '../../types/settings';
import { storage } from '../../utils/storage';

const localStore = new PersistEchoSetting();

beforeEach(() => {
    localStore.persistSettingInLocalStorage(settings);
    initialize();
});

function initialize(): void {
    jest.resetModules();
    jest.clearAllMocks();
}

const setItem = jest.spyOn(storage, 'setItem');
const removeItem = jest.spyOn(storage, 'removeItem');

const mockSettings: Settings = {
    ...settings,
    hasAcceptedTerms: false,
    hasDoneOnboarding: false,
    offlineSettings: [],
    selectedInstCode: '',
    selectedSapPlantId: '',
    selectedProCoSysPlantId: '',
    selectedPlantName: ''
};

describe('PersistEchoSetting', () => {
    describe('persistSettingInLocalStorage', () => {
        it('should be called 7 times', () => {
            localStore.persistSettingInLocalStorage(mockSettings);
            expect(setItem).toBeCalledTimes(Object.keys(settings).length);
        });
    });

    describe('getSettingFromLocalStorage', () => {
        it('should all return default settings', () => {
            const result = localStore.getSettingFromLocalStorage();
            expect(settings).toEqual(result);
        });
        it('should all return default new settings', () => {
            localStore.persistSettingInLocalStorage(mockSettings);
            const result = localStore.getSettingFromLocalStorage();
            expect(settings).toEqual(result);
        });
    });
    describe('removeAllSettingFromLocalStorage', () => {
        it('removeItem should be called 7 times', () => {
            localStore.removeAllSettingFromLocalStorage();
            expect(removeItem).toBeCalledTimes(Object.keys(settings).length);
        });
    });
    describe('removeSettingFromLocalStorageByKey', () => {
        it('removeItem should be called 1 time and called with key', () => {
            localStore.removeSettingFromLocalStorageByKey('key');
            expect(removeItem).toBeCalledTimes(1);
            expect(removeItem).toBeCalledWith('key');
        });
    });
});
