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

/**
 * Returns with the plant that has the passed instCode, or undefined if none of the plants has the passed instCode.
 * @param {string} args.instCode Plant installation code
 * @returns {Plant | undefined} {Plant | undefined}
 */
export function usePlantByInstCode(args: { instCode: string }): Plant | undefined {
    const plants = usePlants();

    return plants.find((plant) => plant.instCode.toLocaleLowerCase() === args.instCode.toLocaleLowerCase());
}
