import { App, AppData, AppMetadata, AvailableDependencies } from '../types/module';
import { checkAppAsync, getLocalRequire } from './dependency';

export function loadModule(meta: AppMetadata, loadModuleData: (meta: AppMetadata) => AppData): App {
    const module = loadModuleData(meta);
    return { ...meta, ...module };
}

export function loadApp(
    link: string,
    depName: string,
    dependencies: AvailableDependencies
): Promise<AppData | undefined> {
    return new Promise<AppData | undefined>((resolve, reject) => {
        const s = document.createElement('script');
        s.async = true;
        s.src = link;
        s.crossOrigin = 'cross-origin';
        window[depName] = getLocalRequire(dependencies);
        s.onload = (): void => {
            const app = checkAppAsync(s.app);
            resolve(app);
        };
        s.onerror = (): void => reject('could not load');
        document.head.appendChild(s);
    });
}
