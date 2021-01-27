import onboarding from './applicationStartupActions';
import { getSetting, setSetting, updateSettingByKey } from './globalSettingsActions';
import { getAllOfflineStatus, getOfflineStatus, setOfflineSettings, setOfflineStatus } from './offlineStatusActions';
import persistEchoSetting from './persistEchoSetting';
import { getSelectedPlant, setSelectedPlant } from './plantSettingsActions';

class CoreSettings {
    // Onboarding
    onboarding = onboarding;

    // Global Settings Actions
    updateSettingByKey = updateSettingByKey;
    setSetting = setSetting;
    getSettings = getSetting; // Todo Get by key and ad s to setting

    // Offline Status Actions
    setOfflineStatus = setOfflineStatus;
    setOfflineSettings = setOfflineSettings;
    getAllOfflineStatus = getAllOfflineStatus;
    getOfflineStatus = getOfflineStatus;

    /**
     *Plant specific actions to get ans set Plant date
     * @param {PlantSettings} plantSettings Parameter for both get and set.
     * @memberof CoreSettings
     */
    plant = {
        getSelected: getSelectedPlant,
        setSelected: setSelectedPlant
    };

    // Persist the EchoSetting
    persistSetting = persistEchoSetting;
}

const EchoSettings = new CoreSettings();
export default EchoSettings;
