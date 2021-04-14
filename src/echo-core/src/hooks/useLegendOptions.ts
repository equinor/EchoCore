import { useAtom } from '@dbeining/react-atom';
import { CoreContext } from '../state/globalState';
import { LegendOptions } from '../types/legend';

export default function useLegendOptions(): LegendOptions {
    const { legendOptions } = useAtom(CoreContext.state);
    return { ...legendOptions };
}
