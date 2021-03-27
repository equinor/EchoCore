/**
 * Uses the `fetch` function (must be available).
 * @param url The URL to GET.
 * @param token The Token for authentication.
 * @returns A promise leading to the raw text content.
 */
export function fetchDependency(url: string, token: string): Promise<string> {
    return fetch(url, {
        headers: { token },
        method: 'GET',
        cache: 'force-cache'
    }).then((m) => m.text());
}
