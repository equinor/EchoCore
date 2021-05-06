import { EchoLocalStorage, storage } from '@equinor/echo-base';
import { settings } from '../state/defaultStates';
import { Settings } from '../types/settings';

export class PersistEchoSetting {
    private echoStorage: EchoLocalStorage;
    private defaultSettings: Settings;

    constructor(echoStorage = storage, defaultSettings = settings) {
        this.echoStorage = echoStorage;
        this.defaultSettings = defaultSettings;
    }
    /**
     * Persist setting data in LocalStorage for later use.
     * @export
     * @param {Settings} settings
     */
    persistSettingsInLocalStorage(settings: Partial<Settings>): void {
        Object.keys(settings).forEach((key: string) => {
            this.echoStorage.setItem(key, settings[key]);
        });
    }
    /**
     * Core function returning application setting from LocalStorage
     * or default settings
     * @export
     * @return {*}  {Settings} localStorage or defaultSettings
     */
    getSettingsFromLocalStorage(): Readonly<Settings> {
        const newSettings = this.defaultSettings;
        Object.keys(this.defaultSettings).forEach((key: string) => {
            const data = this.echoStorage.getItem<Settings>(key);
            if (data) {
                newSettings[key] = data;
            }
        });
        return newSettings;
    }
    /**
     * Core function returning partial of the global setting from LocalStorage,
     * @export
     * @return {*}  {Partial<Readonly<T>} localStorage or defaultSettings
     */
    getSettingsFormLocalStorageByType<T>(): Partial<Readonly<T>> {
        const newSettings = {};
        Object.keys(this.defaultSettings).forEach((key: string) => {
            const data = this.echoStorage.getItem<Partial<T>>(key);
            if (data) {
                newSettings[key] = data;
            }
        });
        return newSettings;
    }
    /**
     * Core function removing all user settings form localStorage
     * @export
     */
    removeAllSettingsFromLocalStorage(): void {
        Object.keys(this.defaultSettings).forEach((key: string) => {
            this.echoStorage.removeItem(key);
        });
    }

    /**
     * Core function removing user settings form localStorage by key
     * @param {string} key for select setting to remove
     * @export
     */
    removeSettingFromLocalStorageByKey(key: string): void {
        this.echoStorage.removeItem(key);
    }
}
export const persistEchoSetting = new PersistEchoSetting();
