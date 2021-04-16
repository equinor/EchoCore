import React from 'react';
import { getRoutesData, registerRoute, unRegisterRoute } from '../../actions/routes';
import { AppMetaData, RouteRegistration } from '../../types';

const TestComponent: React.FC = () => {
    return <div>Hei</div>;
};

const appMeta: AppMetaData = {
    name: 'newApp',
    icon: 'some icon'
};

const testRoute: RouteRegistration = {
    key: 'testRoute',
    component: TestComponent,
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
