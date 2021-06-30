import { BaseError } from '@equinor/echo-base';
import { AppModule } from './modules';

export interface GlobalsStateActions {
    /**
     * Initializes the application shell.
     * @param loading The current loading state.
     * @param error The application error, if any.
     * @param modules The loaded AppModules.
     */
    initializeModule(loading: boolean, error: BaseError | undefined, modules: Array<AppModule>): void;
}
