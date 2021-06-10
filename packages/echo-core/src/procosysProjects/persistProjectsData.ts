import { EchoLocalStorage, storage } from '@equinor/echo-base';
import { procosysProjectsData } from '../state/defaultStates';
import { ProcosysProjectsData } from '../types/procosysProjects';

export class PersistProcosysProjectsData {
    private echoStorage: EchoLocalStorage;
    private defaultProcosysProjectsData: ProcosysProjectsData;
    private key: string;

    constructor(echoStorage: EchoLocalStorage, defaultProcosysProjectsData: ProcosysProjectsData) {
        this.echoStorage = echoStorage;
        this.defaultProcosysProjectsData = defaultProcosysProjectsData;
        this.key = 'procosysProjectsData';
    }

    /**
     * Persist list of procosys projects in LocalStorage.
     * @export
     * @param {ProcosysProjectsData} data
     */
    persistProcosysProjectsDataInLocalStorage(data: ProcosysProjectsData): void {
        this.echoStorage.setItem(this.key, data);
    }

    /**
     * Function for returning procosysProjectsData from LocalStorage
     * @export
     * @return {*}  {ProcosysProjectsData} localStorage
     */
    getProcosysProjectsDataFromLocalStorage(): ProcosysProjectsData {
        let newProcosysProjectsData = this.defaultProcosysProjectsData;
        const data = this.echoStorage.getItem<ProcosysProjectsData>(this.key);
        if (data && typeof data !== 'string') {
            newProcosysProjectsData = data;
        }

        return newProcosysProjectsData;
    }
}
export const persistProcosysProjectsData = new PersistProcosysProjectsData(storage, procosysProjectsData);
