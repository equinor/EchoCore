import { getCoreContext } from '../state/globalState';
import { AppModule } from '../types/modules';
import { GlobalState } from '../types/state';
import { dispatch } from './coreActions/globalActions';

export function registerModules<TKey extends string>(module: AppModule): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        modules: addOrOverwrite(s.modules, module)
    }));
}

export function unRegisterModule<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        modules: removeModuleByKey(s.modules, key)
    }));
}

function addOrOverwrite(modules: Array<AppModule>, module: AppModule): AppModule[] {
    if (modules.find((m) => (m.name = module.name))) {
    }
    return [];
}

function removeModuleByKey<TKey extends string>(modules: AppModule[], key: TKey): AppModule[] {
    return [];
}

// function validateModule(moduleA: AppModule, moduleB?: AppModule): boolean {
//     if (moduleB) {
//         return moduleA.name !== moduleB.name;
//         // move validation
//     }
//     return true;
// }
