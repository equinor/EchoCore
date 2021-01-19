import { PlantSettings, SettingsItem } from '../types/settings';
import { getSetting, setSetting } from './setSetting';

/**
 * Function Used for updating the settings in the global state.
 * @export
 * @param {PlantSettings} plantSettings
 */
export function setSelectedPlant(plantSettings: PlantSettings): void {
    setSetting(plantSettings);
}

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
function setSettingsItems(settingsItems: SettingsItem[], settingsItem: SettingsItem): SettingsItem[] {
    const index = settingsItems.findIndex((x) => x.settingsKey === settingsItem.settingsKey);
    if (index === -1) {
        return [...settingsItems, settingsItem];
    }
    settingsItems[index] = settingsItem;
    return [...settingsItems];
}
