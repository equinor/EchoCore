/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppData, AvailableDependencies } from '../types/module';

declare global {
    interface HTMLScriptElement {
        app?: AppData;
    }
}

function requireModule(name: string, dependencies: AvailableDependencies): any {
    const dependency = dependencies[name];
    if (!dependency) {
        const error = new Error(`Cannot find module '${name}'`);
        (error as any).code = 'MODULE_NOT_FOUND';
        throw error;
    }
    return dependency;
}

function checkApp(app?: AppData): AppData {
    if (!app) {
        console.error('Invalid module found.', app);
    } else if (typeof app.setup !== 'function') {
        console.warn('Setup function is missing.');
    } else {
        return app;
    }
    return {
        setup(): void {
            //setup code
        }
    };
}

export function checkAppAsync(app?: AppData | Promise<AppData>): Promise<AppData> {
    return Promise.resolve(app).then((resolvedApp) => checkApp(resolvedApp));
}

export function getLocalRequire(dependencies: AvailableDependencies = {}) {
    return (moduleName: string): void => requireModule(moduleName, dependencies);
}
