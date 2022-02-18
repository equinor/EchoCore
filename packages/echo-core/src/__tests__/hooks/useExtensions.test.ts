import { renderHook } from '@testing-library/react-hooks';
import { registerMultipleExtensions } from '../../actions/coreActions';
import { useExtensionsByComponentName } from '../../hooks/useExtension';
import { ExtensionRegistration } from './../../types/registry/extension.types';

describe('useExtensionsByComponentName()', () => {
    const mockComponent = () => {
        return null;
    };

    const extandableComponentName = 'MyFavEchopediaWebComponent';

    const extension: ExtensionRegistration = {
        key: 'key-0',
        extends: extandableComponentName,
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
        const unregisterFunctions = registerMultipleExtensions(extensionsToRegister);

        // when
        const { result } = renderHook(() => useExtensionsByComponentName(extandableComponentName));

        // then
        expect(result.current).toStrictEqual([
            {
                key: 'key-0',
                extends: extandableComponentName,
                component: mockComponent
            },
            {
                key: 'key-1',
                extends: extandableComponentName,
                component: mockComponent
            },
            {
                key: 'key-2',
                extends: extandableComponentName,
                component: mockComponent
            }
        ]);

        unregisterFunctions.forEach((unregisterExtension) => unregisterExtension());
    });
});
