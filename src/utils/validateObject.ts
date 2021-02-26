type UnknownObject = Record<string | number | symbol, unknown>;

export function validateObject<T>(object: UnknownObject): T | undefined {
    const objectKeys = Object.getOwnPropertyNames(object);

    typeKeys.forEach((key: string) => {
        if (!objectKeys.includes(key)) return undefined;
    });

    return object as T;
}
