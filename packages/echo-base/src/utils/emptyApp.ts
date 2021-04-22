import { AppMetaData, EchoModule } from '../types/module';

export function createEmptyModule(meta: AppMetaData): EchoModule {
    return {
        ...meta,
        setup(): void {
            // Empty Setup
        }
    };
}
