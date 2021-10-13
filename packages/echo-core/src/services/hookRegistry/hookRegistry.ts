export interface EchoHookRegistry {
    registerHook: (hookName: RegisteredHookName, hook: Function) => void;
    getHookByName: (hookName: RegisteredHookName) => Function;
}

export enum RegisteredHookName {
    useSetActiveTagNo = 'useSetActiveTagNo'
}

export const echoHookRegistry = ((): EchoHookRegistry => {
    const hookRegistry = {};

    return {
        /**
         * Should be only used by EchopediaWeb, when bootstrapping Echo app.
         * Use this method to register a new hook from Echopedia to EchoCore, so it's available for others to use.
         * @param hookName {RegisteredHooks} The hook will be assigned to this key.
         * @param hook {ReactHook} The hook which should be registered.
         */
        registerHook: function (hookName: RegisteredHookName, hook: Function): void {
            if (!hookRegistry[hookName]) {
                hookRegistry[hookName] = hook;
            } else {
                console.error(
                    `[EchoCore.echoHookRegistry.registerHook] Can not set hook: a hook with name ${hookName} is already set.`
                );
            }
        },
        /**
         * Get's the desired hook from the registry. It doesn't call the hook, just returns with it.
         * @param hookName {RegisteredHooks}
         */
        getHookByName: function (hookName: RegisteredHookName): Function {
            const hookNotFoundErrorMessage = `[EchoCore.echoHookRegistry.getHookByName] Can not get hook: there is no hook by the name "${hookName}" registered.`;
            if (!hookRegistry[hookName]) {
                console.error(hookNotFoundErrorMessage);
            }

            return hookRegistry[hookName];
        }
    };
})();
