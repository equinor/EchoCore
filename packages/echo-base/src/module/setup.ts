import { EchoModule, EchoModuleApi, EchoModuleApiCreator } from '../types';

export function setupSingleApp(app: EchoModule, api: EchoModuleApi): void | Promise<void> {
    try {
        const result = app.setup(api);
        return result;
    } catch (error) {}
}

export function setupApp(module: EchoModule, apiFactory: EchoModuleApiCreator): void | Promise<void> {
    return setupSingleApp(module, apiFactory(module));
}
