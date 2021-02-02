type Dict = { [key: string]: unknown };

class Store {
    public dict: Dict = {};
}

const store = new Store();

export class ModuleSettings<T> {
    protected store: Store;
    public key: string;

    constructor(key: string, initialState: T) {
        this.store = store;
        this.key = '';
        this.setup<T>(key, initialState);
    }

    set = (value: Partial<T>): void => {
        if (typeof this.store.dict[this.key] === 'object')
            this.store.dict[this.key] = { ...(this.store.dict[this.key] as Record<string, unknown>), ...value };
        else this.store.dict[this.key] = value;
    };

    get = (): T => {
        return this.store.dict[this.key] as T;
    };

    Clear = (): void => {
        this.store.dict[this.key] = {};
    };

    private isKeyUnique(key: string): boolean {
        if (key.length === 0) throw TypeError('Please enter a key!');
        return !this.store.dict.hasOwnProperty(key);
    }

    protected setup<T>(key: string, initialState: Partial<T>): void {
        if (this.isKeyUnique(key)) {
            this.store.dict[key] = initialState;
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
        Object.keys(this.store.dict).forEach((key) => delete this.store.dict[key]);
    }

    getAll(): unknown {
        return this.store.dict;
    }

    getByKey = (key: string): Partial<T> | undefined => {
        const index = Object.keys(this.store.dict).findIndex((objectKey: string) => objectKey === key);
        if (index > -1) {
            return this.store.dict[key] as T;
        }
        return undefined;
    };
}
