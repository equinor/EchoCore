export enum DeepLinkParameters {
    InstCode = 'instCode',
    TagNo = 'tagNo',
    SearchText = 'search'
}

export const availableSearchParams = ['instCode', 'tagNo', 'search'];

type LinkParam = { [key: string]: string | null };
export function getLinkParams<T extends LinkParam>(
    params: Array<keyof LinkParam> = availableSearchParams
): Required<T> {
    const queryParams = new URLSearchParams(new URL(window.location.href).search);
    const linkParams = {} as LinkParam;
    params.forEach((key) => {
        linkParams[key] = queryParams.get(String(key));
    });
    return linkParams as Required<T>;
}

export const setDeepLinkParams = (param: string, value: string): void => {
    const queryParams = new URLSearchParams(new URL(window.location.href).search);
    if (value.length > 0) {
        queryParams.set(param, value);
    } else {
        queryParams.delete(param);
    }
    console.log(`${window.location.pathname}?${queryParams}`);
    window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
};
