import { Panel } from './panel';

export interface CoreConfig {
    leftPanel: Panel;
    rightPanel: Panel;
    authProviderLogFunc?: (...args: unknown[]) => void;
}
