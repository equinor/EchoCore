import ArgumentError from '../errors/ArgumentError';
import { ModuleMetaData } from '../types/module';
import { persistLocalModuleMeta } from './persist';

export function verifyModulesMeta(modules: ModuleMetaData[]): ModuleMetaData[] {
    if (modules.length === 0) {
        throw new ArgumentError({ argumentName: 'No modules awaitable' });
    }
    persistLocalModuleMeta('EchoModules', modules);
    return modules;
}
