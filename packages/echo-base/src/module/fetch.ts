/**
 * Uses the `fetch` function (must be available).
 * @param url The URL to GET.
 * @param token The Token for authentication.
 * @returns A promise leading to the raw text content.
 */
export async function defaultFetchDependency(url: string, token: string): Promise<string> {
    const m = await fetch(url, {
        headers: { token },
        method: 'GET',
        cache: 'force-cache'
    });
    return await m.text();
}
