import { BaseError } from '@equinor/echo-base';
export interface EchoHookRegistry {
    registerHook: (hookRegistryItem: HookRegistryItem) => void;
    registerMultipleHooks: (hookRegistryList: HookRegistryItem[]) => void;
    getHookByName: (hookName: RegisteredHookName | string) => EchoCustomHook;
}

/**
 * @deprecated This enum method should not be used. Use RegisteredHookName from EchoFramework instead.
 */
export enum RegisteredHookName {
    useSetActiveTagNo = 'useSetActiveTagNo',
    useContextMenuDataInfo = 'useContextMenuDataInfo',
    useTagData = 'useTagData',
    useIsContextMenuInfoLoading = 'useIsContextMenuInfoLoading'
}

type HookRegistryItem = {
    hookName: RegisteredHookName | string;
    hook: EchoCustomHook;
};

type EchoCustomHook = (...args) => unknown;

export const echoHookRegistry = ((): EchoHookRegistry => {
    const hookRegistry = {};

    return Object.freeze({
        /**
         * Should be only used by EchopediaWeb, when bootstrapping Echo app.
         * Use this method to register a new hook from Echopedia to EchoCore, so it's available for others to use.
         * @param hookName {RegisteredHooks} The hook will be assigned to this key.
         * @param hook {ReactHook} The hook which should be registered.
         */
        registerHook: function ({ hookName, hook }: HookRegistryItem): void {
            if (!hookRegistry[hookName]) {
                hookRegistry[hookName] = hook;
            } else {
                throw new BaseError({
                    name: 'HookAlreadyExistsError',
                    message: `[EchoCore.echoHookRegistry.registerHook] Can not set hook: a hook with name ${hookName} is already set.`
                });
            }
        },
        /**
         * Should be only used by EchopediaWeb, when bootstrapping Echo app.
         * Use this method to register a new hooks from Echopedia to EchoCore, so it's available for others to use.
         * @param hookList {HookRegistryItem[]} key value pairs of the hooks which should be registered.
         */
        registerMultipleHooks: function (hookList: HookRegistryItem[]): void {
            hookList.forEach((registryItem) => {
                this.registerHook(registryItem);
            });
        },
        /**
         * Get's the desired hook from the registry. It doesn't call the hook, just returns with it.
         * @param hookName {RegisteredHooks}
         */
        getHookByName: function (hookName: RegisteredHookName | string): EchoCustomHook {
            return (
                hookRegistry[hookName] ||
                ((): void => {
                    throw new BaseError({
                        name: 'InvalidHookNameError',
                        message: `[EchoCore.echoHookRegistry.getHookByName] Can not get hook: there is no hook by the name "${hookName}" registered.`
                    });
                })
            );
        }
    });
})();
