import { useGlobalState } from '../state/useGlobalState';
import { Plant, PlantsData } from '../types/plants';

/**
 * Hook for returning plantsData from the global state.
 * @export
 * @return {*}  {PlantsData}
 */
export function usePlantsData(): PlantsData {
    const { plantsData } = useGlobalState();
    return plantsData;
}

/**
 * Hook for returning list of plants from the global state.
 * @export
 * @return {*}  {Plant[]}
 */
export function usePlants(): Plant[] {
    return usePlantsData().plants;
}
