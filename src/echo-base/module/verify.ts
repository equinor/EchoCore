import ArgumentError from '../../errors/ArgumentError';
import { persistLocalModuleMeta } from './persist';
import { EquinorModuleMeta } from './types';

export function verifyModulesMeta(modules: EquinorModuleMeta[]): EquinorModuleMeta[] {
    if (modules.length === 0) {
        throw new ArgumentError({ argumentName: 'No modules awaitable' });
    }
    persistLocalModuleMeta('EchoModules', modules);
    return modules;
}
