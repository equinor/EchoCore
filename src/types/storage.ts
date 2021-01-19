/**
 * EchoStorage is a way to store key Value pairs in Local Storage.
 *
 * @export
 * @interface EchoStorage
 */
export interface EchoLocalStorage {
    /**
     *
     * @param {string} key of item to store
     * @param {string} data to add to storage
     * @memberof EchoStorage
     */
    setItem: <T>(key: string, data: T) => void;
    /**
     *
     * @param {string} key for selecting data.
     * @return {T} T data for storage or
     * @return {undefined} if key is not found or data is not valid.
     * @memberof EchoStorage
     */
    getItem: <T>(key: string) => T | string | undefined;
    /**
     *
     * @param {string} key for selecting item to remove
     * @memberof EchoStorage
     */
    removeItem: (key: string) => void;
}
