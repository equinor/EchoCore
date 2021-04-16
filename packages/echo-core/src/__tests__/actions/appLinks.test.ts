import { registerAppLink, unRegisterAppLink } from '../../actions/appLinks';
import { readState } from '../../actions/globalActions';
import { getCoreContext } from '../../state/globalState';
import { AppLink } from '../../types/registry';
import { GlobalState } from '../../types/state';

const appLink: AppLink = {
    tile: 'app',
    icon: 'app-icon',
    uri: '/app'
};

describe('appLink-registerAppLink', () => {
    it('should update register app link with key', () => {
        registerAppLink('app', appLink);
        expect({ app: appLink }).toEqual(readState(getCoreContext(), (state: GlobalState) => state.registry.appLinks));
    });

    it('should unRegister app link with key', () => {
        unRegisterAppLink('app');
        expect({}).toEqual(readState(getCoreContext(), (state: GlobalState) => state.registry.appLinks));
    });
});
