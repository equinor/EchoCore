import { AppApiCreator, AppModule } from '../types/module';
import { setupApp } from './setup';

export function createApps(createAppApi: AppApiCreator, apps: AppModule[]): Promise<AppModule[]> {
    const promises: Array<Promise<void> | void> = [];

    for (const app of apps) {
        promises.push(setupApp(app, createAppApi));
    }

    return Promise.all(promises).then(() => apps);
}

export async function createApp(createAppApi: AppApiCreator, app: AppModule): Promise<AppModule> {
    await setupApp(app, createAppApi);
    return app;
}
