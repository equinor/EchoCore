import { registerApp, RegisterAppOptions, unRegisterApp } from '../../../actions/coreActions/app';
import { readState } from '../../../actions/coreActions/globalActions';
import { getCoreContext } from '../../../state/globalState';
import { AppLink, GlobalState, RouteRegistration } from '../../../types';

const testRoute: RouteRegistration = {
    name: 'app',
    customHeaderSection: undefined,
    icon: 'app-icon',
    key: 'app',
    path: '/app',
    component: () => {
        return null;
    }
};

const appLink: AppLink = {
    name: 'app',
    icon: 'app-icon',
    path: '/app'
};

const app: RegisterAppOptions = {
    ...testRoute,
    ...appLink
};

describe('Echo-Core > app.ts', () => {
    it('registerApp -> should update routes and appLink with key', () => {
        registerApp('app', app);
        expect({ app: appLink }).toEqual(readState(getCoreContext(), (state: GlobalState) => state.registry.appLinks));
        expect({ app: testRoute }).toEqual(readState(getCoreContext(), (state: GlobalState) => state.registry.routes));
    });

    it('unRegisterApp -> should remove registered app by key', () => {
        unRegisterApp('app');
        expect({}).toEqual(readState(getCoreContext(), (state: GlobalState) => state.registry.appLinks));
        expect({}).toEqual(readState(getCoreContext(), (state: GlobalState) => state.registry.routes));
    });
});
