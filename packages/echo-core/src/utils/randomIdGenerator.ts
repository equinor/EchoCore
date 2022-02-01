/**
 * A function which returns a random six character alpha-numeric string.
 * @export
 * @return {string}
 */
export function generateRandomId(): string {
    return Math.floor((1 + Math.random()) * 0x1000000)
        .toString(16)
        .substring(1);
}
