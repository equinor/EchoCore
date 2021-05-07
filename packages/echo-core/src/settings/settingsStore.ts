type Dict = { [key: string]: unknown };

export class SettingStore {
    public moduleSettings: Dict = {};
}

export const store = new SettingStore();
