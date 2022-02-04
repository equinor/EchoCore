export type ExtensionRegistry = Record<string, ExtensionRegistration[]>;

export type ExtensionRegistration = {
    key: string;
    extends: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component?: React.FC<any>;
    isVisible?: (...args) => boolean;
    options?: Record<string, unknown>;
};
