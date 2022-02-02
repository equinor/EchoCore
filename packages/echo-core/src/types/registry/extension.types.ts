export type ExtensionRegistry = Record<ExtendableComponentName, ExtensionRegistration[]>;

export type ExtensionRegistration =
    | ExtensionWithComponent
    | ContextualNavLinkOptionsWithIcon
    | ContextualNavLinkOptionsWithComponent;

interface ContextualNavLinkOptionsWithIcon extends ContextualNavLinkOptionsBase {
    iconName: string;
    component?: never;
}

interface ContextualNavLinkOptionsWithComponent extends ContextualNavLinkOptionsBase {
    iconName?: never;
    component: React.FC<unknown>;
}

interface ExtensionWithComponent extends ExtensionBase {
    component: React.FC<unknown>;
}

interface ContextualNavLinkOptionsBase extends ExtensionBase {
    extends: ExtendableComponentName.ContextualNavigationList;
    appPath?: string;
    isVisible?: (...args) => boolean;
}

interface ExtensionBase {
    key: string;
    extends: ExtendableComponentName;
    [key: string]: unknown;
}

export enum ExtendableComponentName {
    ContextualNavigationList = 'ContextualNavigationList'
}
