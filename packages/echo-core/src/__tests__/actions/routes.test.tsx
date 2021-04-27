import React from 'react';
import { getRoutesData, registerRoute, unRegisterRoute } from '../../actions/routes';
import { RouteRegistration } from '../../types/registry';

const TestComponent: React.FC = () => {
    return <div>Hei</div>;
};

const testRoute: RouteRegistration = {
    key: 'testRoute',
    component: TestComponent,
    url: 'test'
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
