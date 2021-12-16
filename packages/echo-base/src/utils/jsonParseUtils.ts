function convertDateHelper(key: any, value: any): any {
    if (typeof value === 'string') {
        const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.{0,1}\d*))(?:Z|(\+|-)([\d|:]*))?$/;
        const a = reISO.exec(value);
        if (a) {
            return new Date(value);
        }
    }
    return value;
}

// This function is a duplicate of a function in EchoUtils.
// Adding it here since we don't want base to be dependent on EchoUtils.
export function parseJsonWithDate(jsonString: string): any {
    return JSON.parse(jsonString, convertDateHelper);
}
