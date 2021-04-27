import { EchoModule, ModuleMetaData } from '../types/module';

export function createEmptyModule(meta: ModuleMetaData): EchoModule {
    return {
        ...meta,
        setup(): void {
            // Empty Setup
        }
    };
}
