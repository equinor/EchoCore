import { App, AppApi, AppApiCreator, MultiApp, SingleApp } from '../types';

export function setupSingleApp(app: SingleApp, api: AppApi): void | Promise<void> {
    try {
        const result = app.setup(api);
        return result;
    } catch (error) {}
}

export function setupMultiApps(app: MultiApp, apiFactory: AppApiCreator): void | Promise<void> {
    try {
        return app.setup(apiFactory);
    } catch (e) {
        console.error(`Error while setting up ${app?.name}.`, e);
    }
}

export function setupApp(app: App, apiFactory: AppApiCreator): void | Promise<void> {
    if ('bundle' in app) {
        return setupMultiApps(app as MultiApp, apiFactory);
    } else {
        return setupSingleApp(app, apiFactory(app));
    }
}
