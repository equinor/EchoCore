/* eslint-disable @typescript-eslint/no-unused-vars */
export function addOrOverwriteWithKey<T, TKey extends keyof T>(obj: T, key: TKey, value: T[TKey]): T {
    return {
        ...obj,
        [key]: value
    };
}

export function removeWithKey<T, TKey extends keyof T>(obj: T, key: TKey): T {
    const { [key]: _, ...newObj } = obj;
    return newObj as T;
}
