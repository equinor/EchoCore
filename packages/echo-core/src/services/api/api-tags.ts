import { RequestTagDetails, TagDetails } from '../../types/tagDetails';
import { baseApiUrl, request } from './api-manager';

export async function getTagDetails({ instCode, tagNo }: RequestTagDetails): Promise<TagDetails> {
    const url = `${baseApiUrl}/${instCode}/tag?tagNo=${tagNo}`;
    return await request<TagDetails>(url, {} as TagDetails);
}
