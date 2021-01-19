import { Settings } from './settings';

export interface PersistSettings {
    /**
     * Persist setting data In LocalStorage for later use.
     * @export
     * @param {Settings} settings
     */
    persistSettingInLocalStorage: (settings: Settings) => void;

    /**
     * Core function returning application setting from LocalStorage
     * or default settings
     * @export
     * @return {*}  {Settings} localStorage or defaultSettings
     */
    getSettingFromLocalStorage: () => Settings;

    /**
     * Core function removing all user settings form localStorage
     * @export
     */
    removeAllSettingFromLocalStorage: () => void;

    /**
     * Core function removing user settings form localStorage by key
     * @param {string} key for select setting to remove
     * @export
     */
    removeSettingFromLocalStorageByKey: (key: string) => void;
}
