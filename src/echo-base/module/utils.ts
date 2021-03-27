import { EquinorModule, EquinorModuleMeta } from '../echo-setup/echoSetup';

export function removeElementById(id: string): void {
    document.getElementById(id)?.remove();
}

export function isfunc(f: any): f is Function {
    return typeof f === 'function';
}

export function createEmptyModule(meta: EquinorModuleMeta): EquinorModule {
    return {
        ...meta,
        setup(): void {
            // Empty module
        }
    };
}
