/**
 * Util for returning uniq array.
 * @param array of type T
 */
export function makeUniqBy<T, K extends keyof T>(prop: K, arr: Array<T>): Array<T> {
    const set = new Set();
    return arr.filter((o) => !set.has(o[prop]) && set.add(o[prop]));
}
