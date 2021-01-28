import { getSelectedPlant, setSelectedPlant } from '../../settings/plantSettingsActions';
import { legendOptions, settings } from '../../state/defaultStates';
import { dispatch } from '../../state/globalActions';
import { getCoreContext } from '../../state/globalState';
import { ActivePanel } from '../../types/panel';
import { PlantSettings } from '../../types/settings';

beforeEach(() => {
    initialize();
});

const globalInit = {
    modules: [],
    panels: [],
    activePanel: ActivePanel.None,
    activeModule: '',
    moduleState: {},
    userProfile: undefined,
    userPhotoUrl: undefined,
    legendOptions,
    settings
};

function initialize(): void {
    dispatch(getCoreContext(), () => globalInit);
}

describe('plantSettingActions', () => {
    const plantSettings: PlantSettings = {
        instCode: 'JSV',
        sapPlantId: 'JSV',
        proCoSysPlantId: 'JSV',
        plantName: 'Johann Sverdrup'
    };

    describe('setSelectedPlant', () => {
        it('should update or set the PlantSettings', () => {
            setSelectedPlant(plantSettings);
        });
    });

    describe('getSelectedPlant', () => {
        it('should get the PlantSettings', () => {
            setSelectedPlant(plantSettings);
            const result = getSelectedPlant();
            expect(plantSettings).toEqual(result);
        });
    });
});
