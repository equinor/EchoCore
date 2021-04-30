import { EchoModule, EchoModuleApi, EchoModuleApiCreator } from '../types';

export function setupSingleModule(module: EchoModule, api: EchoModuleApi): void | Promise<void> {
    try {
        const result = module.setup(api);
        return result;
    } catch (error) {
        console.warn(error);
    }
}

export function setupModule(module: EchoModule, apiFactory: EchoModuleApiCreator): void | Promise<void> {
    return setupSingleModule(module, apiFactory(module));
}
