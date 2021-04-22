import { AppDependencyGetter } from '../types';
import { AppMetaData, AvailableDependencies } from '../types/module';

const defaultGlobalDependencies: AvailableDependencies = {};
const defaultGetDependencies: AppDependencyGetter = () => false;

export function getDependencyResolver(
    globalDependencies = defaultGlobalDependencies,
    getLocalDependencies = defaultGetDependencies
): AppDependencyGetter {
    return (target: AppMetaData): false | AvailableDependencies => {
        return getLocalDependencies(target) || globalDependencies;
    };
}
