type Dict = { [key: string]: unknown };

class SettingStore {
    public moduleSettings: Dict = {};
}

export const store = new SettingStore();

export class ModuleSettings<T> {
    protected store: SettingStore;
    public key: string;

    constructor(key: string, initialState: T) {
        this.store = store;
        this.key = '';
        this.setup<T>(key, initialState);
    }

    set = (value: Partial<T>): void => {
        if (typeof this.store.moduleSettings[this.key] === 'object')
            this.store.moduleSettings[this.key] = {
                ...(this.store.moduleSettings[this.key] as Record<string, unknown>),
                ...value
            };
        else this.store.moduleSettings[this.key] = value;
    };

    get = (): T => {
        return this.store.moduleSettings[this.key] as T;
    };

    clear = (): void => {
        this.store.moduleSettings[this.key] = {};
    };

    private isKeyUnique(key: string): boolean {
        if (key.length === 0) throw TypeError('Please enter a key!');
        return !this.store.moduleSettings.hasOwnProperty(key);
    }

    protected setup<T>(key: string, initialState: Partial<T>): void {
        if (this.isKeyUnique(key)) {
            this.store.moduleSettings[key] = initialState;
            this.key = key;
        } else {
            throw TypeError('Key needs to be uniq!');
        }
    }
}

export class EchoModuleSettings<T> extends ModuleSettings<T> {
    constructor(key: string, initialState: T, clear = false) {
        super(key, initialState);
        if (clear) {
            this.clearStore();
            this.setup(key, initialState);
        }
    }

    private clearStore(): void {
        Object.keys(this.store.moduleSettings).forEach((key) => delete this.store.moduleSettings[key]);
    }

    getAll(): unknown {
        return this.store.moduleSettings;
    }

    getByKey = (key: string): Partial<T> | undefined => {
        const index = Object.keys(this.store.moduleSettings).findIndex((objectKey: string) => objectKey === key);
        if (index > -1) {
            return this.store.moduleSettings[key] as T;
        }
        return undefined;
    };
}
