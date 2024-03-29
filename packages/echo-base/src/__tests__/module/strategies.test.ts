import { BaseError } from '../../errors';
import { standardStrategy } from '../../module/strategies';
import { EchoModule, EchoModuleApi, EchoModuleApiCreator, LoadingModuleOptions, ModuleMetaData } from '../../types';
import { eventHub } from '../../utils/eventHub';

function createMockApi(): EchoModuleApiCreator {
    return (meta: ModuleMetaData): EchoModuleApi => ({
        meta,
        eventHub
    });
}

describe('Echo-Base strategies module', () => {
    it('standardStrategy evaluates all in one sweep', async () => {
        // Arrange
        const setupMock = jest.fn();
        const callbackMock = jest.fn();

        const appModule = [
            {
                setup: setupMock,
                key: 'sA1',
                name: 'someApp',
                shortName: 'someApp',
                path: '/',
                fileUri: 'file.js',
                version: '1'
            },
            {
                setup: setupMock,
                key: 'sA2',
                name: 'someApp',
                shortName: 'someApp',
                path: '/',
                fileUri: 'file.js',
                version: '1'
            }
        ] as EchoModule[];
        const loadingOptions: LoadingModuleOptions = {
            createApi: createMockApi(),
            fetchModules: jest.fn(() => Promise.resolve(appModule)),
            modules: appModule
        };

        await standardStrategy(loadingOptions, callbackMock);

        expect(setupMock).toHaveBeenCalledTimes(2);
        expect(callbackMock).toHaveBeenCalledTimes(1);
        expect(callbackMock.mock.calls[0][0]).toBeUndefined();
        expect(callbackMock.mock.calls[0][1]).toHaveLength(2);
    });

    it('standardStrategy evaluates also with no modules', async () => {
        const callbackMock = jest.fn();
        const loadingOptions: LoadingModuleOptions = {
            createApi: createMockApi(),
            fetchModules: jest.fn(() => Promise.resolve([])),
            modules: []
        };

        await standardStrategy(loadingOptions, callbackMock);

        expect(callbackMock).toHaveBeenCalledTimes(1);
        expect(callbackMock.mock.calls[0][0]).toBeUndefined();
        expect(callbackMock.mock.calls[0][1]).toHaveLength(0);
    });

    it('standardStrategy evaluates also with no modules and no fetch', async () => {
        const callbackMock = jest.fn();
        const loadingOptions: LoadingModuleOptions = {
            createApi: createMockApi()
        };

        await standardStrategy(loadingOptions, callbackMock);

        expect(callbackMock).toHaveBeenCalledTimes(1);
        expect(callbackMock.mock.calls[0][0]).toBeUndefined();
        expect(callbackMock.mock.calls[0][1]).toHaveLength(0);
    });

    it('standardStrategy reports error if failed due to invalid arguments', async () => {
        // given
        let actualError: BaseError;
        const modules = true as any;
        const invalidLoadModuleOptions: LoadingModuleOptions = {
            createApi: createMockApi(),
            fetchModules: jest.fn(() => Promise.resolve(modules)),
            modules
        };

        // when
        await standardStrategy(invalidLoadModuleOptions, (error) => (actualError = error));

        // then
        expect(actualError.name).toBe('ModulesEvaluationError');
        expect(actualError.message).toBe('[strategies.evaluateAllModules] failed');

        const actualProperties = actualError.getInnerErrorProperties();
        expect(actualProperties['name']).toBe('TypeError');
        expect(actualProperties['message']).toBe('oldModules is not iterable');
    });
});
