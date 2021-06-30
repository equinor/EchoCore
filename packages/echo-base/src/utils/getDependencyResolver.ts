import { AppDependencyGetter } from '../types';
import { AvailableDependencies, ModuleMetaData } from '../types/module';

const defaultGlobalDependencies: AvailableDependencies = {};
const defaultGetDependencies: AppDependencyGetter = () => false;

export function getDependencyResolver(
    globalDependencies = defaultGlobalDependencies,
    getLocalDependencies = defaultGetDependencies
): AppDependencyGetter {
    return (target: ModuleMetaData): false | AvailableDependencies => {
        return getLocalDependencies(target) || globalDependencies;
    };
}
