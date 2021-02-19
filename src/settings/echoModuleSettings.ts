import { ModuleSettings } from './moduleSettings';
/**
 * This is a class meant for the settings module and will probably move when the
 * work on the settings module is in development.
 *
 * @export
 * @class EchoModuleSettings
 * @extends {ModuleSettings<T>}
 * @template T
 */
export class EchoModuleSettings<T> extends ModuleSettings<T> {
    constructor(key: string, initialState: T, clear = false) {
        super(key, initialState);
        if (clear) {
            this.clearStore();
            this.setup(key, initialState);
        }
    }
    /**
     * This function for clearing the store on reset. Used for testing mostly.
     * @private
     * @memberof EchoModuleSettings
     */
    private clearStore(): void {
        Object.keys(this.store.moduleSettings).forEach((key) => delete this.store.moduleSettings[key]);
    }

    /**
     * Returns all module settings registered. To be able to use this function data will need some sort of parsing or
     * the user should know All interfaces that are present. Then having confections to all modules. Something we should strive for not to do.
     * @return {*}  {unknown}
     * @memberof EchoModuleSettings
     */
    getAll(): unknown {
        return this.store.moduleSettings;
    }
    /**
     * get specific settings by key and returns Partial of T
     *
     * @param {string} key
     * @return {*}  {Partial<T>}
     * @memberof EchoModuleSettings
     */
    getByKey = <T>(key: string): Partial<T> | undefined => {
        const index = Object.keys(this.store.moduleSettings).findIndex((objectKey: string) => objectKey === key);
        if (index > -1) {
            return this.store.moduleSettings[key] as Partial<T>;

    };
}