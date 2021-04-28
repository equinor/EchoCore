import { EchoModule, EchoModuleApi, EchoModuleApiCreator } from '../types';

export function setupSingleModule(app: EchoModule, api: EchoModuleApi): void | Promise<void> {
    try {
        const result = app.setup(api);
        return result;
    } catch (error) {}
}

export function setupModule(module: EchoModule, apiFactory: EchoModuleApiCreator): void | Promise<void> {
    return setupSingleModule(module, apiFactory(module));
}
