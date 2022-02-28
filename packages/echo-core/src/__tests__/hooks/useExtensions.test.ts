import { act, renderHook } from '@testing-library/react-hooks';
import { registerMultipleExtensions } from '../../actions/coreActions';
import { useExtensionsByComponentName } from '../../hooks/useExtension';
import { ExtensionRegistration } from './../../types/registry/extension.types';

describe('useExtensionsByComponentName()', () => {
    const mockComponent = () => {
        return null;
    };

    const extendableComponentName = 'MyFavEchopediaWebComponent';

    const extension: ExtensionRegistration = {
        key: 'key-0',
        extends: extendableComponentName,
        component: mockComponent
    };
    it('should get all extensions associated with a component name', () => {
        // given
        const extensionsToRegister = [
            {
                ...extension
            },
            {
                ...extension,
                key: 'key-1'
            },
            {
                ...extension,
                key: 'key-2'
            },
            {
                ...extension,
                extends: 'OtherComponent',
                key: 'key-1'
            },
            {
                ...extension,
                extends: 'OtherComponent',
                key: 'key-2'
            }
        ];
        let unregisterFunctions;
        act(() => {
            unregisterFunctions = registerMultipleExtensions(extensionsToRegister);
        });

        // when
        let result;
        act(() => {
            result = renderHook(() => useExtensionsByComponentName(extendableComponentName)).result;
        });

        // then
        expect(result.current).toStrictEqual([
            {
                key: 'key-0',
                extends: extendableComponentName,
                component: mockComponent
            },
            {
                key: 'key-1',
                extends: extendableComponentName,
                component: mockComponent
            },
            {
                key: 'key-2',
                extends: extendableComponentName,
                component: mockComponent
            }
        ]);

        unregisterFunctions.forEach((unregisterExtension) => {
            act(() => {
                unregisterExtension();
            });
        });
    });
});
