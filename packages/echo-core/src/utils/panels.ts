import { Panel } from '../types/panel';
import { CorePanels } from '../types/state';

export function combinePanels(
    modulePanels: Panel[],
    addSearch: boolean,
    corePanelsGetter: (searchActive: boolean, corePanels: Partial<CorePanels>) => Panel[],
    corePanels: Partial<CorePanels>
): Panel[] {
    return [...corePanelsGetter(addSearch, corePanels), ...modulePanels];
}

export function getCorePanels(addSearch = true, corePanels: Partial<CorePanels>): Panel[] {
    const { searchPanel, mainMenu } = corePanels;
    if (!searchPanel || !mainMenu) return [];

    const panels: Panel[] = [];
    if (addSearch) panels.push(searchPanel);
    panels.push(mainMenu);
    return panels;
}
