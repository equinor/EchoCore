import { Panel } from '.';

export interface CoreConfig {
    leftPanel: Panel;
    rightPanel: Panel;
    authProviderLogFunc?: (...args: unknown[]) => void;
}
