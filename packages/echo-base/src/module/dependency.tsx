/* eslint-disable @typescript-eslint/no-explicit-any */
import { AvailableDependencies, ModuleData, MultiAppsMetadata, SingleAppMetadata } from '../types';

declare global {
    interface HTMLScriptElement {
        app?: ModuleData;
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

function checkApp(name: string, app?: ModuleData): ModuleData {
    if (!app) {
        console.error('Invalid module found.', name);
    } else if (typeof app.setup !== 'function') {
        console.warn('Setup function is missing.', name);
    } else {
        return app;
    }
    return {
        setup(): void {
            //setup code
        }
    };
}

export async function includeScript(
    name: string,
    link: string,
    depName: string,
    dependencies: AvailableDependencies,
    crossOrigin?: string,
    integrity?: string
): Promise<ModuleData | undefined> {
    return new Promise<ModuleData | undefined>((resolve, reject) => {
        const script = document.createElement('script');
        script.async = true;
        script.src = link;
        script.id = name;

        if (integrity) {
            script.crossOrigin = crossOrigin || 'anonymous';
            script.integrity = integrity;
        } else if (crossOrigin) {
            script.crossOrigin = crossOrigin;
        }

        window[depName] = getLocalRequire(dependencies);

        script.onload = (): void => resolve(checkAppAsync(name, script.app));
        script.onerror = (): void => reject('could not load');

        document.head.appendChild(script);
    });
}

export async function checkAppAsync(name: string, app?: ModuleData | Promise<ModuleData>): Promise<ModuleData> {
    const resolvedApp = await Promise.resolve(app);
    return checkApp(name, resolvedApp);
}

export function getLocalRequire(dependencies: AvailableDependencies = {}) {
    return (moduleName: string): void => requireModule(moduleName, dependencies);
}

export async function includeDependency(
    { name, link, requireRef, integrity }: SingleAppMetadata,
    dependencies?: AvailableDependencies,
    crossOrigin?: string
): Promise<ModuleData> {
    return await includeScript(name, link, requireRef, dependencies, crossOrigin, integrity);
}

export function includeBundle(
    { name, link, bundle, integrity }: MultiAppsMetadata,
    dependencies?: AvailableDependencies,
    crossOrigin?: string
): Promise<ModuleData> {
    return includeScript(name ?? '(bundle)', link, bundle, dependencies, crossOrigin, integrity);
}
