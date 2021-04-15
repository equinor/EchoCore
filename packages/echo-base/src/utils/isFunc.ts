
export function isfunc(f: unknown): f is Function {
    return typeof f === 'function';
}