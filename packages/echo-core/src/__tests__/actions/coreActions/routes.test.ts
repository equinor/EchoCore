import { getRoutesData, registerRoute, unRegisterRoute } from '../../../actions/coreActions/routes';
import { RouteRegistration } from '../../../types/registry';

const testRoute: RouteRegistration = {
    key: 'newApp',
    path: 'newApp',
    component: () => {
        return null;
    }
};

describe('getRoutes', () => {
    it('should return an empty list if no routes are registered', () => {
        const emptyRoutes = getRoutesData();
        expect(emptyRoutes).toEqual([]);
    });
});
describe('registerRoute', () => {
    it('should register a route', () => {
        registerRoute('newRoute', testRoute);
        const routes = getRoutesData();

        expect(routes).toEqual([testRoute]);
    });
});
describe('unRegisterRoute', () => {
    it('should unregister a route', () => {
        registerRoute('newRoute', testRoute);

        unRegisterRoute('newRoute');
        const emptyRoutes = getRoutesData();

        expect(emptyRoutes).toEqual([]);
    });
});
