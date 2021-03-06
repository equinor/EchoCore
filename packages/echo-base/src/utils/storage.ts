import { EchoLocalStorage } from '../types/storage';

export const storage: EchoLocalStorage = {
    setItem: <T>(key: string, data: T) => {
        if (typeof data === 'string') {
            localStorage.setItem(key, data);
        } else {
            localStorage.setItem(key, JSON.stringify(data));
        }
    },

    getItem: <T>(key: string) => {
        const data = localStorage.getItem(key);
        if (!data) return undefined;

        try {
            return JSON.parse(data) as T;
        } catch {
            return data;
        }
    },

    removeItem: (key: string) => {
        localStorage.removeItem(key);
    }
};

export default storage;
