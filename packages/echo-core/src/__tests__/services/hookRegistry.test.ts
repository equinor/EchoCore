import { BaseError } from '@equinor/echo-base';
import { echoHookRegistry, RegisteredHookName } from '../../../src/services/hookRegistry';

describe('echoHookRegistry', () => {
    describe('registerHook()', () => {
        it('should be able to register a hook and get it back from the registry', () => {
            // given
            const mockHook = jest.fn();

            // when
            echoHookRegistry.registerHook(RegisteredHookName.useSetActiveTagNo, mockHook);
            const actualHook = echoHookRegistry.getHookByName(RegisteredHookName.useSetActiveTagNo);

            // then
            expect(actualHook).toBe(mockHook);
        });

        it('should throw an error if a hook is already set by the given name', () => {
            // given
            const hookName = RegisteredHookName.useSetActiveTagNo;
            const mockHook = jest.fn();

            try {
                // when
                echoHookRegistry.registerHook(hookName, mockHook);
                echoHookRegistry.registerHook(hookName, mockHook);
            } catch (error) {
                // then
                expect(error).toEqual(
                    new BaseError({
                        message: `[EchoCore.echoHookRegistry.registerHook] Can not set hook: a hook with name ${hookName} is already set.`,
                        exception: {
                            hookName
                        }
                    })
                );
            }
        });
    });

    describe('getHookByName()', () => {
        it('should throw an error if trying to get a hook which is not in the registry', () => {
            // given
            const hookName = 'totallyNonExistentHook' as RegisteredHookName;

            try {
                // when
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const myHook = echoHookRegistry.getHookByName(hookName)();
            } catch (error) {
                // then
                expect(error).toEqual(
                    new BaseError({
                        message: `[EchoCore.echoHookRegistry.getHookByName] Can not get hook: there is no hook by the name "${hookName}" registered.`,
                        exception: {
                            hookName
                        }
                    })
                );
            }
        });
    });
});
