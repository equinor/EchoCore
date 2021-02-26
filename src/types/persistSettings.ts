import { Settings } from './settings';

export interface PersistSettings {
    /**
     * Persist setting data in LocalStorage for later use.
     * @export
     * @param {Settings} settings
     */
    persistSettingsInLocalStorage: (settings: Partial<Settings>) => void;

    /**
     * Core function returning application setting from LocalStorage
     * or default settings
     * @export
     * @return {*}  {Settings} localStorage or defaultSettings
     */
    getSettingsFromLocalStorage: () => Readonly<Settings>;

    /**
     * Core function returning partial of the global setting from LocalStorage,
     * @export
     * @return {*}  {Partial<Readonly<T>} localStorage or defaultSettings
     */
    getSettingsFormLocalStorageByType: <T>() => Partial<Readonly<T>>;
    /**
     * Core function removing all user settings form localStorage
     * @export
     */
    removeAllSettingsFromLocalStorage: () => void;

    /**
     * Core function removing user settings form localStorage by key
     * @param {string} key for select setting to remove
     * @export
     */
    removeSettingFromLocalStorageByKey: (key: string) => void;
}
