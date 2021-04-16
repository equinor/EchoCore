import { AppMetaData, RouteRegistration } from '@equinor/echo-base';
import { getRoutesData, registerRoute, unRegisterRoute } from '../../registryActions/routes';

const appMeta: AppMetaData = {
    name: 'newApp',
    icon: 'some icon'
};

const testRoute: RouteRegistration = {
    key: 'testRoute',
    meta: appMeta
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
