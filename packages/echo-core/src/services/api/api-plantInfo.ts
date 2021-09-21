import { baseApiUrl, request } from './api-manager';

export interface EchoHubPlant {
    plantCode: string;
    installationCode: string;
    projectDescription: string;
    plantDirectory: string;
    operationArea: string;
    availableInEcho3D: boolean;
    sapId: number;
    ayelixSiteId?: number;
}

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
