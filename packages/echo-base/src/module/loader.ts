import { LoaderConfig } from '../types/loader';
import { App, AppData, AppMetadata, AvailableDependencies } from '../types/module';
import { checkAppAsync, getLocalRequire } from './dependency';

export function loadModule(meta: AppMetadata, loadModuleData: (meta: AppMetadata) => AppData): App {
    const module = loadModuleData(meta);
    return { ...meta, ...module };
}

// export const globalDependencies: AvailableDependencies = {
//     react: require('react'),
//     'react-dom': require('react-dom'),
//     '@equinor/echo-core': require('@equinor/echo-core'),
//     '@equinor/echo-framework': require('@equinor/echo-framework'),
//     '@equinor/echo-components': require('@equinor/echo-components'),
//     '@equinor/echo-utils': require('@equinor/echo-utils')
// };

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



export function loader(
    getDependencies: ()=> Record<string, any>,
    options: LoaderConfig
) {
    return  
}