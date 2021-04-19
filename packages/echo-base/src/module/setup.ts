import { AppApiCreator, AppModule, AppModuleApi, MultiAppModule, SingleAppModule } from '../types';

export function setupSingleApp(app: SingleAppModule, api: AppModuleApi): void | Promise<void> {
    try {
        const result = app.setup(api);
        return result;
    } catch (error) {}
}

export function setupMultiApps(app: MultiAppModule, apiFactory: AppApiCreator): void | Promise<void> {
    try {
        return app.setup(apiFactory);
    } catch (e) {
        console.error(`Error while setting up ${app?.name}.`, e);
    }
}

export function setupApp(module: AppModule, apiFactory: AppApiCreator): void | Promise<void> {
    if ('bundle' in module) {
        return setupMultiApps(module as MultiAppModule, apiFactory);
    } else {
        return setupSingleApp(module, apiFactory(module));
    }
}
