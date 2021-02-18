import { useAtom } from '@dbeining/react-atom';
import { CoreContext } from '../state/globalState';
import { PanelUI } from '../types/ui';
/**
 *
 *
 * @return {*}  {PanelUI}
 */
function usePanelUI(): PanelUI {
    const { ui } = useAtom(CoreContext.state);
    return ui;
}

export default usePanelUI;
