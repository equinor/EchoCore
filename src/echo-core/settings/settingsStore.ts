type Dict = { [key: string]: unknown };

export class SettingStore {
    public moduleSettings: Dict = {};
}

const store = new SettingStore();
export default store;
