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
    });
});
