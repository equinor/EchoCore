import * as globalSettingsActions from './globalSettingsActions';
import * as persistEchoSetting from './persistEchoSetting';
import * as plant from './plantSettingsActions';
export * from './echoModuleSettings';
export * from './moduleSettings';
export * from './persistEchoSetting';
export * from './procosysProjectSettingsActions';
export * from './settingsStore';
export * from './useSetting';

export const EchoSettings = {
    // Global Settings Actions
    ...globalSettingsActions,

    /**
     * Plant specific actions to Get and Set Plant date
     * @param {PlantSettings} plantSettings Parameter for both get and set.
     * @memberof CoreSettings
     */
    plant,

    // Persist the EchoSetting
    ...persistEchoSetting
};
