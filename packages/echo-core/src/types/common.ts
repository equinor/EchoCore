export type NestedPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<Partial<U>> : T[P] extends EmptyObject ? Partial<T[P]> : T[P];
};

/**
 * Dictionary of type generic Type T
 */
export type Dict<T> = Record<string, T>;

export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

export type EmptyObject = Record<string, never>;
