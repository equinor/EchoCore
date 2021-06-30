import { startLoadingModules } from '../../module/create';
import { EchoModuleApi, ModuleMetaData } from '../../types';
import { EchoModuleApiCreator } from '../../types/creators';
import { eventHub } from '../../utils/eventHub';

function createMockApi(): EchoModuleApiCreator {
    return (meta: ModuleMetaData): EchoModuleApi => ({
        meta,
        eventHub
    });
}

describe('Echo-Base create module', () => {
    it('startLoadingModules triggers the reporter', () => {
        const reporter = jest.fn();

        const loading = startLoadingModules({
            createApi: createMockApi(),
            fetchModules: () => Promise.resolve([]),
            modules: []
        });
        loading.connect(reporter);
        expect(reporter).toHaveBeenCalledTimes(1);
    });
});
