import { EchoModule, EchoModuleApiCreator } from '../types';
import { isfunc } from '../utils/isFunc';
import { setupApp } from './setup';

function checkCreateApi(createAppApi: EchoModuleApiCreator): boolean {
    if (!isfunc(createAppApi)) {
        console.warn('Invalid `createAppApi` function. Skipping App installation.');
        return false;
    }

    return true;
}

export async function createModules(createAppApi: EchoModuleApiCreator, apps: EchoModule[]): Promise<EchoModule[]> {
    const promises: Array<Promise<EchoModule>> = [];

    for (const app of apps) {
        promises.push(createModule(createAppApi, app));
    }

    return await Promise.all(promises).then((loadedApps) => loadedApps);
}

export async function createModule(createAppApi: EchoModuleApiCreator, app: EchoModule): Promise<EchoModule> {
    if (checkCreateApi(createAppApi)) {
        await setupApp(app, createAppApi);
    }
    return app;
}
