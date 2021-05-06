import { EchoLocalStorage, storage } from '@equinor/echo-base';
import { plantsData } from '../state/defaultStates';
import { PlantsData } from '../types/plants';

export class PersistPlantsData {
    private echoStorage: EchoLocalStorage;
    private defaultPlantsData: PlantsData;
    private key: string;

    constructor(echoStorage: EchoLocalStorage, defaultPlantsData: PlantsData) {
        this.echoStorage = echoStorage;
        this.defaultPlantsData = defaultPlantsData;
        this.key = 'plantsData';
    }

    /**
     * Persist list of plants in LocalStorage.
     * @export
     * @param {PlantsData} data
     */
    persistPlantsDataInLocalStorage(data: PlantsData): void {
        this.echoStorage.setItem(this.key, data);
    }

    /**
     * Function for returning plantsData from LocalStorage
     * @export
     * @return {*}  {PlantsData} localStorage
     */
    getPlantsDataFromLocalStorage(): PlantsData {
        let newPlantsData = this.defaultPlantsData;
        const data = this.echoStorage.getItem<PlantsData>(this.key);
        if (data && typeof data !== 'string') {
            newPlantsData = data;
        }

        return newPlantsData;
    }
}
export const persistPlantsData = new PersistPlantsData(storage, plantsData);
