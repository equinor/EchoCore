import { dispatch } from '../state/globalActions';
import { getCoreContext } from '../state/globalState';
import { Module } from '../types/modules';
import { GlobalState } from '../types/state';

export function registerModules<TKey extends string>(module: Module): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        modules: addOrOverwrite(s.modules, module)
    }));
}

export function unnRegisterApp<TKey extends string>(key: TKey): void {
    dispatch(getCoreContext(), (s: GlobalState) => ({
        ...s,
        modules: removeModuleByKey(s.modules, key)
    }));
}
function addOrOverwrite(modules: Array<Module>, module: Module): Module[] {
    if (modules.find((m) => (m.test = module.test))) {
    }
    return [];
}

function removeModuleByKey(modules: Module[], key: TKey): Module[] {
    return [];
}

function validateModule(moduleA: Module, moduleB?: Module): boolean {
    if (moduleB) {
        return moduleA.test !== moduleB.test;
        // move validation
    }
    return true;
}
