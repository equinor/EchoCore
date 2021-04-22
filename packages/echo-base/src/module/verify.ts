import ArgumentError from '../errors/ArgumentError';
import { AppMetaData } from '../types/module';
import { persistLocalModuleMeta } from './persist';

export function verifyModulesMeta(modules: AppMetaData[]): AppMetaData[] {
    if (modules.length === 0) {
        throw new ArgumentError({ argumentName: 'No modules awaitable' });
    }
    persistLocalModuleMeta('EchoModules', modules);
    return modules;
}
