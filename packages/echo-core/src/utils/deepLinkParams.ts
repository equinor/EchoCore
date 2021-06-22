export enum DeepLinkParameters {
    InstCode = 'instCode',
    TagNo = 'tagNo',
    SearchText = 'search'
}

export const availableSearchParams = ['instCode', 'tagNo', 'search'];

type LinkParam = { [key: string]: string | null };

/**
 * This function wil extract the query parameter in the browser url
 * if present a string value will be present and if not the value wil be null.
 * The in param wil be a list if the desired parameters,
 * default parameter are:
 *
 * ```
 *  ['instCode', 'tagNo', 'search'];
 * ```
 *
 * @export
 * @template T
 * @param {Array<keyof LinkParam>} [params=availableSearchParams]
 * @return {*}  {Required<T>} Will return a object with the provided parameters, but the value may be strung or null
 */
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
/**
 * this function will replace the query parameters on det current url
 *
 * @param {string} param
 * @param {string} value
 */
export const setDeepLinkParams = (param: string, value: string): void => {
    const queryParams = new URLSearchParams(new URL(window.location.href).search);
    if (value.length > 0) {
        queryParams.set(param, value);
    } else {
        queryParams.delete(param);
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
};
