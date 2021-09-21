import { RequestTagDetails, TagDetails } from '../../types/tagDetails';
import { baseApiUrl, request } from './api-manager';

/**
 * Fetches tag details from API for a given tag
 * @param {Object} {
 *      instCode: {string} Code for the plant where the tag is located
 *      tagNo: {string} Tag number
 * }
 */
export async function getTagDetails({ instCode, tagNo }: RequestTagDetails): Promise<TagDetails> {
    const url = `${baseApiUrl}/${instCode}/tag?tagNo=${tagNo}`;
    return await request<TagDetails>(url, {} as TagDetails);
}
