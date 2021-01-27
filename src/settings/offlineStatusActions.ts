import { readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { OfflineSetting } from '../types/settings';
import { getSetting, setSetting } from './globalSettingsActions';

//Todo clean me up :P

/**
 * Updates or ads offlineSetting item to the offlineSettings.
 *
 * @export
 * @param {OfflineSetting} offlineSetting
 */
export function setOfflineStatus(offlineSetting: OfflineSetting): void {
    const settings = getSetting();
    setSetting({ offlineSettings: setOfflineSettings(settings.offlineSettings, offlineSetting) });
}

/**
 * Helper function for adding new  or updating the settings items.
 *
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
 * This function wil retrieve all offline settings.
 *
 * @export
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
 * @export
 * @param {string} key
 * @return {*}  {(Readonly<offlineSetting> | undefined)}
 */
export function getOfflineStatus(key: string): Readonly<OfflineSetting> | undefined {
    const offlineSetting: Readonly<OfflineSetting> | undefined = getAllOfflineStatus().find(
        (item: OfflineSetting) => item.settingsKey === key
    );

    if (offlineSetting) return offlineSetting;
    throw new Error('Invalid Settings key.');
}
