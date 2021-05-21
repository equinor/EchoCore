export const getKeyFromPath = (path: string): string => {
    return path.split('/')[1].split('?')[0];
};

export const getPathFromKey = (key?: string): string => {
    if (key) {
        const path = key.split('/').filter((k) => k !== '');
        return `/${path}`;
    }
    return '/';
};
