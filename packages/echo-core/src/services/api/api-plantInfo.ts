import { EchoHubPlant } from '../../types/plants';
import { baseApiUrl, request } from './api-manager';

/**
 * Fetches plant information from API
 * @param {string} instCode Code of the plant
 */
export async function getPlantInfoFromApi(instCode?: string): Promise<EchoHubPlant[]> {
    let url = `${baseApiUrl}/EchoHub/plant-info`;
    if (instCode) {
        url += `?instCode=${instCode}`;
    }
    return await request<EchoHubPlant[]>(url, []);
}
