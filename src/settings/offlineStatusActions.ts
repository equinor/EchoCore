import { readState } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { SettingsItem } from '../types/settings';
import { getSetting, setSetting } from './globalSettingsActions';

/**
 *
 *
 * @export
 * @param {SettingsItem} settingsItem
 */
export function setOfflineStatus(settingsItem: SettingsItem): void {
    const settings = getSetting();
    setSetting({ settingsItems: setSettingsItems(settings.settingsItems, settingsItem) });
}

/**
 * Helper function for adding new  or updating the settings items.
 *
 * @param {SettingsItem[]} settingsItems
 * @param {SettingsItem} settingsItem
 * @return {*}  {SettingsItem[]}
 */
export function setSettingsItems(settingsItems: SettingsItem[], settingsItem: SettingsItem): SettingsItem[] {
    const index = settingsItems.findIndex((x) => x.settingsKey === settingsItem.settingsKey);
    if (index === -1) {
        return [...settingsItems, settingsItem];
    }
    settingsItems[index] = settingsItem;
    return [...settingsItems];
}

/**
 *
 *
 * @export
 * @return {*}  {Readonly<SettingsItem[]>}
 */
export function getAllOfflineStatus(): Readonly<SettingsItem[]> {
    return readState(getCoreContext(), (state) => {
        return state.settings.settingsItems as Readonly<SettingsItem[]>;
    });
}

/**
 *
 *
 * @export
 * @param {string} key
 * @return {*}  {(Readonly<SettingsItem> | undefined)}
 */
export function getOfflineStatus(key: string): Readonly<SettingsItem> | undefined {
    const settingsItem: Readonly<SettingsItem> | undefined = getAllOfflineStatus().find(
        (item: SettingsItem) => item.settingsKey === key
    );

    if (settingsItem) return settingsItem;
    throw new Error('Invalid Settings key.');
}
