import { dispatch } from '../../actions/coreActions/globalActions';
import { getInstCode, getProCoSysPlantId, getSapPlantId, setSelectedPlant } from '../../settings/plantSettingsActions';
import { defaultGlobalState } from '../../state/defaultStates';
import { getCoreContext } from '../../state/globalState';
import { PlantSettings } from '../../types';

beforeEach(() => {
    initialize();
});

function initialize(): void {
    dispatch(getCoreContext(), () => defaultGlobalState);
}

describe('plantSettingActions', () => {
    const plantSettings: PlantSettings = {
        instCode: 'JSV',
        hasTr2000: true,
        sapPlantId: 'JSV',
        proCoSysPlantId: 'JSV',
        plantName: 'Johann Sverdrup'
    };

    describe('setSelectedPlant', () => {
        it('should update or set the PlantSettings', () => {
            setSelectedPlant(plantSettings);
        });
    });

    describe('getInstCode', () => {
        it('should get the instCode', () => {
            setSelectedPlant(plantSettings);
            const result = getInstCode();
            expect(plantSettings.instCode).toEqual(result);
        });
    });
    describe('getSapPlantId', () => {
        it('should get the sapPlantId', () => {
            setSelectedPlant(plantSettings);
            const result = getSapPlantId();
            expect(plantSettings.sapPlantId).toEqual(result);
        });
    });
    describe('getProCoSysPlantId', () => {
        it('should get the proCoSysPlantId', () => {
            setSelectedPlant(plantSettings);
            const result = getProCoSysPlantId();
            expect(plantSettings.proCoSysPlantId).toEqual(result);
        });
    });
});
