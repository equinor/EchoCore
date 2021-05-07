import { ModuleMetaData } from '../types/module';
import { persistLocalModuleMeta } from './persist';

export function verifyModulesMeta(modules: ModuleMetaData[]): ModuleMetaData[] {
    if (modules instanceof Array) {
        modules.length > 0 && persistLocalModuleMeta('EchoModules', modules);
        return modules;
    }
    console.info('No modules awaitable.');
    return [];
}
