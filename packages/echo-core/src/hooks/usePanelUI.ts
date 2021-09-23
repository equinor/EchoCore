import { useAtom } from '@dbeining/react-atom';
import { CoreContext } from '../state/globalState';
import { PanelUI } from '../types/ui';

/**
 *Echo Core hook for handling non-default panel ui.
 * @return {PanelUI}  Reads the ui state and returns a partial ui-object of type PanelUI
 */
export function usePanelUI(): PanelUI {
    const { ui } = useAtom(CoreContext.state);
    return ui;
}

// const panels = {
//     test: 'hello',
//     test2: 'world!'
// };

// function setActivePanelUI(key: string) {
//     console.log(key);
// }

// export function customPanelUI() {
//     let funcList: Record<string, () => void> = {};

//     Object.keys(panels).forEach((key) => {
//         funcList = {
//             ...funcList,
//             [key]: (): void => {
//                 setActivePanelUI(key);
//             }
//         };
//     });

//     return funcList;
// }

// const setPanels = customPanelUI();

// setPanels.test();
