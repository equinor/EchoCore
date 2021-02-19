import onboarding from './applicationStartupActions';
import { getSettings, getSettingsByKey, setSetting, updateSettingByKey } from './globalSettingsActions';
import persistEchoSetting from './persistEchoSetting';
import { getSelectedPlant, setSelectedPlant } from './plantSettingsActions';

class CoreSettings {
    // Onboarding
    onboarding = onboarding;

    // Global Settings Actions
    updateSettingByKey = updateSettingByKey;
    setSetting = setSetting;
    getSettings = getSettings;
    getSettingsByKey = getSettingsByKey;

    /**
     * Plant specific actions to Get and Set Plant date
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
