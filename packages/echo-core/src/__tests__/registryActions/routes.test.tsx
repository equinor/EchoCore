import React from 'react';
import { getRoutesData, registerRoute, unRegisterRoute } from '../../actions/routes';
import { AppMetaData, RouteRegistration } from '../../types/registry';

const test = () => {
    return <div>Test</div>;
};
const appMeta: AppMetaData = {
    title: 'newApp'
};

const testRoute: RouteRegistration = {
    key: 'newApp',
    component: test,
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
