import ArgumentError from '../errors/ArgumentError';
import { EquinorModuleMeta } from '../types/module';
import { persistLocalModuleMeta } from './persist';

export function verifyModulesMeta(modules: EquinorModuleMeta[]): EquinorModuleMeta[] {
    if (modules.length === 0) {
        throw new ArgumentError({ argumentName: 'No modules awaitable' });
    }
    persistLocalModuleMeta('EchoModules', modules);
    return modules;
}
