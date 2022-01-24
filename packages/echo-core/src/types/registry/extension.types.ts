export type ExtensionRegistry = Record<ExtendableComponentName, ExtensionRegistration[]>;

export type ExtensionRegistration = ExtensionWithIcon | ExtensionWithComponent;

interface ExtensionWithIcon extends ExtensionBase {
    component?: never;
    iconName: string;
}

interface ExtensionWithComponent extends ExtensionBase {
    component: React.FC<unknown>;
    iconName?: never;
}

interface ExtensionBase {
    key: string;
    extends: ExtendableComponentName;
    isVisible?: ((...args) => boolean) | boolean;
    [T: string]: unknown;
}

export enum ExtendableComponentName {
    ContextualNavigationList = 'ContextualNavigationList'
}
