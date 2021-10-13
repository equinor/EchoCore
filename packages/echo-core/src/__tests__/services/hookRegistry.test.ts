import { echopediaHookRegistry, RegisteredHookName } from '../../../src/services/hookRegistry';

describe('echopediaHookRegistry', () => {
    describe('registerHook()', () => {
        it('should register a hook by the passed name', () => {
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
