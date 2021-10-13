import { echopediaHookRegistry, RegisteredHookName } from '../../../src/services/hookRegistry';

describe('echopediaHookRegistry', () => {
    describe('registerHook()', () => {
        it('should be able to register a hook and get it back from the registry', () => {
            // given
            const mockHook = jest.fn();

            // when
            echopediaHookRegistry.registerHook(RegisteredHookName.useSetActiveTagNo, mockHook);
            const actualHook = echopediaHookRegistry.getHookByName(RegisteredHookName.useSetActiveTagNo);

            // then
            expect(actualHook).toBe(mockHook);
        });
    });
});
