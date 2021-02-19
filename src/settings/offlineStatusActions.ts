import { readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { OfflineSetting } from '../types/settings';
import { getSettings, setSetting } from './globalSettingsActions';

/**
 * Updates or adds offlineSetting item to the offlineSettings.
 *
 * @export Function from Echo Core
 * @param {OfflineSetting} offlineSetting
 */
export function setOfflineStatus(offlineSetting: OfflineSetting): void {
    const settings = getSettings();
    setSetting({ offlineSettings: setOfflineSettings(settings.offlineSettings, offlineSetting) });
}

/**
 * Helper function for adding new  or updating the settings items.
 *
 * @export Function from Echo Core
 * @param {OfflineSetting[]} offlineSettings
 * @param {OfflineSetting} offlineSetting
 * @return {*}  {offlineSetting[]}
 */
export function setOfflineSettings(
    offlineSettings: OfflineSetting[],
    offlineSetting: OfflineSetting
): OfflineSetting[] {
    const index = offlineSettings.findIndex((x) => x.settingsKey === offlineSetting.settingsKey);
    if (index === -1) {
        return [...offlineSettings, offlineSetting];
    }
    offlineSettings[index] = offlineSetting;
    return [...offlineSettings];
}

/**
 * This function will retrieve all offline settings.
 *
 * @export Function from Echo Core
 * @return {*}  {Readonly<offlineSetting[]>}
 */
export function getAllOfflineStatus(): Readonly<OfflineSetting[]> {
    return readState(getCoreContext(), (state) => {
        return state.settings.offlineSettings as Readonly<OfflineSetting[]>;
    });
}

/**
 * Get offline status of specific data by key.
 *
 * @export Function from Echo Core
 * @param {string} key
 * @return {*}  {(Readonly<offlineSetting> | undefined)}
 */
export function getOfflineStatus(key: string): Readonly<OfflineSetting> | undefined {
    const offlineSetting: Readonly<OfflineSetting> | undefined = getAllOfflineStatus().find(
        (item: OfflineSetting) => item.settingsKey === key
    );

    return offlineSetting;
}
