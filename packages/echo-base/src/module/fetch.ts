import { AppMetaData, AppMetaFetch } from '../types/module';
import { ModulesMetaError } from './errors';
import { verifyModulesMeta } from './verify';

/**
 * Fetch the metadata for all modules registered
 *
 * @export
 * @param {ModulesMetaFetch} getModulesCallback
 * @return {*}  {Promise<AppMetadata[]>}
 */
export async function getModulesMeta(getModulesCallback?: AppMetaFetch): Promise<AppMetaData[]> {
    try {
        if (getModulesCallback) {
            return verifyModulesMeta(await getModulesCallback());
        }
        /*
         * Fetch module here, and verify data
         */
        return [];
    } catch (error) {
        throw new ModulesMetaError(error);
    }
}

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
