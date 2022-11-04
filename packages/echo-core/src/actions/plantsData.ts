import { persistPlantsData } from '../plants/persistPlantsData';
import { getCoreContext } from '../state/globalState';
import { Plant, PlantsData } from '../types/plants';
import { GlobalState } from '../types/state';
import { dispatch, readState } from './coreActions/globalActions';

/**
 * Function for updating plantsData in global state.
 * @export
 * @param {Partial<PlantsData>} partialPlantsData
 */
export function setPlantsData(partialPlantsData: Partial<PlantsData>): void {
    const plantsData = { ...getPlantsData(), ...partialPlantsData };
    dispatch(getCoreContext(), (state: GlobalState) => {
        persistPlantsData.persistPlantsDataInLocalStorage(plantsData);
        const newState = { ...state, plantsData };
        return newState;
    });
}

/**
 * Function for getting plantsData from the global state.
 * @export
 * @return {*}  {Readonly<PlantsData>}
 */
export function getPlantsData(): Readonly<PlantsData> {
    const plants = readState(getCoreContext(), (state: GlobalState) => state.plantsData);
    if (plants.plants.length > 0) {
        return plants;
    }

    const plantsFromStorage = persistPlantsData.getPlantsDataFromLocalStorage();
    if (plantsFromStorage.plants.length > 0) {
        dispatch(getCoreContext(), (state: GlobalState) => {
            const newState = { ...state, plantsFromStorage };
            return newState;
        });
    }

    return plantsFromStorage;
}

/**
 * Function for getting list of plants from the global state.
 * @export
 * @return {*}  {Readonly<Plant[]>}
 */
export function getPlants(): Readonly<Plant[]> {
    return getPlantsData().plants;
}
