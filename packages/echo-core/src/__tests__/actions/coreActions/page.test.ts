import { getRoutesData, registerPage, unRegisterPage } from '../../../actions/coreActions/';
import { RouteRegistration } from '../../../types';

const test = (): null => {
    return null;
};

const testRoute: RouteRegistration = {
    key: 'newApp',
    path: 'newApp',
    component: test
};

describe('getRoutes', () => {
    it('should return an empty list if no routes are registered', () => {
        const emptyRoutes = getRoutesData();
        expect(emptyRoutes).toEqual([]);
    });
});
describe('registerRoute', () => {
    it('should register a route', () => {
        registerPage('newRoute', testRoute);
        const routes = getRoutesData();

        expect(routes).toEqual([testRoute]);
    });
});
describe('unRegisterRoute', () => {
    it('should unregister a route', () => {
        registerPage('newRoute', testRoute);

        unRegisterPage('newRoute');
        const emptyRoutes = getRoutesData();

        expect(emptyRoutes).toEqual([]);
    });
});
