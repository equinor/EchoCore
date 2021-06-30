import { getModuleLoader } from '../../module/loader';

describe('Standard Module Loader', () => {
    it('loading a dependency free content-module should work', async () => {
        const dependencyRequest = jest.fn(() => Promise.resolve(''));
        const loadModules = getModuleLoader(dependencyRequest);
        const result = await loadModules({
            fileUri: 'module.exports = { setup: function () {} }',
            name: 'myModule',
            version: '1.0.0',
            key: 'myModule',
            shortName: 'myModule'
        });
        expect(result.setup).not.toBeUndefined();
        expect(dependencyRequest).toHaveBeenCalledTimes(0);
    });

    it('loading a module without its dependencies should work', async () => {
        console.error = jest.fn();
        const dependencyRequest = jest.fn(() => Promise.reject(''));
        const loadModules = getModuleLoader(dependencyRequest);
        const result = await loadModules({
            fileUri: 'module.exports = { setup: function () {} }',
            name: 'myModule',
            version: '1.0.0',
            key: 'myModule',
            shortName: 'myModule'
        });
        expect(result.setup).not.toBeUndefined();
        expect(dependencyRequest).toHaveBeenCalledTimes(0);
        expect(console.error).toHaveBeenCalledTimes(0);
    });

    it('loading a module without setup function should work', async () => {
        const dependencyRequest = jest.fn(() => Promise.reject(''));
        const loadModules = getModuleLoader(dependencyRequest);
        const result = await loadModules({
            fileUri: 'module.exports = { test: function () {} }',
            name: 'myModule',
            version: '1.0.0',
            key: 'myModule',
            shortName: 'myModule'
        });
        expect(result.setup).not.toBeUndefined();
        expect(dependencyRequest).toHaveBeenCalledTimes(0);
    });
});
