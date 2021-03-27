import { EquinorModule, EquinorModuleData, EquinorModuleMeta } from './types';

export function loadModule(
    meta: EquinorModuleMeta,
    loadModuleData: (meta: EquinorModuleMeta) => EquinorModuleData
): EquinorModule {
    const module = loadModuleData(meta);
    return { ...meta, ...module };
}

export function loader(meta: EquinorModuleMeta): EquinorModuleData {
    // implement
    console.log(meta);
    return {
        setup: (): void => {
            // Empty Setup
        }
    };
}
