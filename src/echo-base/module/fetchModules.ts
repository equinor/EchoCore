import BaseError from '../errors/BaseError';
import { AppMetadata, AppMetaFetch } from '../types/module';
import { verifyModulesMeta } from './verify';

class ModulesMetaError extends BaseError {}

/**
 * Fetch the metadata for all modules registered
 *
 * @export
 * @param {ModulesMetaFetch} getModulesCallback
 * @return {*}  {Promise<AppMetadata[]>}
 */
export async function getModulesMeta(getModulesCallback?: AppMetaFetch): Promise<AppMetadata[]> {
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
