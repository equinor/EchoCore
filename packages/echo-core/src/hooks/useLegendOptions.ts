import { useGlobalState } from '../state/useGlobalState';
import { LegendOptions } from '../types/legend';

export function useLegendOptions(): LegendOptions {
    const legendOptions = useGlobalState((state) => state.legendOptions);
    return { ...legendOptions };
}
