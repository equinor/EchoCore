import { Panel } from './panel';
import { ExtensionRegistration } from './registry/extension.types';

export interface CoreConfig {
    leftPanel: Panel;
    rightPanel: Panel;
    extensions?: ExtensionRegistration[];
    authProviderLogFunc?: (...args: unknown[]) => void;
}
