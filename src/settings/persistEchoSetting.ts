import { settings } from '../state/defaultStates';
import { PersistSettings } from '../types/persistSettings';
import { Settings } from '../types/settings';
import { EchoLocalStorage } from '../types/storage';
import { storage } from '../utils/storage';

export class PersistEchoSetting implements PersistSettings {
    private echoStorage: EchoLocalStorage;
    private defaultSettings: Settings;

    constructor(echoStorage = storage, defaultSettings = settings) {
        this.echoStorage = echoStorage;
        this.defaultSettings = defaultSettings;
    }

    persistSettingInLocalStorage(settings: Settings): void {
        Object.keys(settings).forEach((key: string) => {
            this.echoStorage.setItem(key, settings[key]);
        });
    }

    getSettingFromLocalStorage(): Settings {
        const newSettings = this.defaultSettings;
        Object.keys(this.defaultSettings).forEach((key: string) => {
            const data = this.echoStorage.getItem<Settings>(key);
            if (data) {
                newSettings[key] = data;
            }
        });
        return newSettings;
    }

    removeAllSettingFromLocalStorage(): void {
        Object.keys(this.defaultSettings).forEach((key: string) => {
            this.echoStorage.removeItem(key);
        });
    }

    removeSettingFromLocalStorageByKey(key: string): void {
        this.echoStorage.removeItem(key);
    }
}
const persistEchoSetting = new PersistEchoSetting();
export default persistEchoSetting;