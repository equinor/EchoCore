import BaseError from '../../errors/BaseError';
import { EquinorModuleMeta, ModulesMetaFetch } from '../types';
import { verifyModulesMeta } from '../verify';

class ModulesMetaError extends BaseError {}

/**
 * Fetch the metadata for all modules registered
 *
 * @export
 * @param {ModulesMetaFetch} getModulesCallback
 * @return {*}  {Promise<EquinorModuleMeta[]>}
 */
export async function getModulesMeta(getModulesCallback?: ModulesMetaFetch): Promise<EquinorModuleMeta[]> {
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
