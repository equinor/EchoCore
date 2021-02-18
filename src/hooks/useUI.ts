import { useAtom } from '@dbeining/react-atom';
import { CoreContext } from '../state/globalState';
import { UI } from '../types/state';

/**
 * @returns {UsePanels} Returns and object `modulePanel`
 * , `setActivePanel`, `activePanel` and `isPanelActive`.
 */

function useUI(): UI {
    const { ui } = useAtom(CoreContext.state);
    return ui;
}

export default useUI;
