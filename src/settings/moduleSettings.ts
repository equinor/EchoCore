import store, { SettingStore } from './settingsStore';
/**
 *
 *
 * @export
 * @class ModuleSettings
 * @template T
 */
export class ModuleSettings<T> {
    protected store: SettingStore;
    public key: string;

    constructor(key: string, initialState: T) {
        this.store = store;
        this.key = '';
        this.setup<T>(key, initialState);
    }
    /**
     * Setter function fro setting the module settings
     * TODO: Persist data in local storage
     * @param {Partial<T>} value
     * @memberof ModuleSettings
     */
    set = (value: Partial<T>): void => {
        if (typeof this.store.moduleSettings[this.key] === 'object')
            this.store.moduleSettings[this.key] = {
                ...(this.store.moduleSettings[this.key] as Record<string, unknown>),
                ...value
            };
        else this.store.moduleSettings[this.key] = value;
    };
    /**
     * Getter function for retrieving the module settings registered by module by it's
     * unique key.
     *
     * @memberof ModuleSettings
     */
    get = (): T => {
        return this.store.moduleSettings[this.key] as T;
    };
    /**
     * Clear the settings object for this module.
     * TODO: Persist in local storage
     * @memberof ModuleSettings
     */
    clear = (): void => {
        this.store.moduleSettings[this.key] = {};
    };
    /**
     * Function for checking unique keys in modules settings
     *
     * @private
     * @param {string} key
     * @return {*}  {boolean}
     * @memberof ModuleSettings
     */
    private isKeyUnique(key: string): boolean {
        if (key.length === 0) throw TypeError('Please enter a key!');
        return !this.store.moduleSettings.hasOwnProperty(key);
    }
    /**
     * Setup function use internal or in derived classes for this class.
     * This will check if your key is Unique and trow TypeError if not.
     *
     * @protected
     * @template T
     * @param {string} key
     * @param {Partial<T>} initialState
     * @memberof ModuleSettings
     */
    protected setup<T>(key: string, initialState: Partial<T>): void {
        if (this.isKeyUnique(key)) {
            this.store.moduleSettings[key] = initialState;
            this.key = key;
        } else {
            throw TypeError('Key needs to be uniq!');
        }
    }
}
