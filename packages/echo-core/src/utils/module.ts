import { AppModule } from '../types/modules';

export function addOrOverwrite(modules: Array<AppModule>, module: AppModule): AppModule[] {
    if (modules.find((m) => (m.name = module.name))) {
    }
    return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function removeModuleByKey<TKey extends string>(modules: AppModule[], key: TKey): AppModule[] {
    return [];
}
