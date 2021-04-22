import { EchoModule, EchoModuleApi, EchoModuleApiCreator, MultiModule, SingleModule } from '../types';

export function setupSingleApp(app: SingleModule, api: EchoModuleApi): void | Promise<void> {
    try {
        const result = app.setup(api);
        return result;
    } catch (error) {}
}

export function setupMultiApps(app: MultiModule, apiFactory: EchoModuleApiCreator): void | Promise<void> {
    try {
        return app.setup(apiFactory);
    } catch (e) {
        console.error(`Error while setting up ${app?.name}.`, e);
    }
}

export function setupApp(module: EchoModule, apiFactory: EchoModuleApiCreator): void | Promise<void> {
    if ('bundle' in module) {
        return setupMultiApps(module as MultiModule, apiFactory);
    } else {
        return setupSingleApp(module as SingleModule, apiFactory(module));
    }
}
