import { registerExtension, registerMultipleExtensions } from '../../../actions/coreActions/extensions';
import { readState } from '../../../actions/coreActions/globalActions';
import { getCoreContext } from '../../../state/globalState';
import { ExtensionRegistration } from './../../../types/registry/extension.types';

describe('extensions', () => {
    describe('registerExtension()', () => {
        it('should register and unregister a given extension into the state', () => {
            // when
            const unregisterExtension = registerExtension(extension);
            let registeredExtensions = getExtensions();

            // then
            expect(registeredExtensions).toEqual({
                MyFavEchopediaWebComponent: [
                    { component: mockComponent, extends: 'MyFavEchopediaWebComponent', key: 'unique-key' }
                ]
            });

            // when
            unregisterExtension();
            registeredExtensions = getExtensions();

            // then
            expect(registeredExtensions).toStrictEqual({
                MyFavEchopediaWebComponent: []
            });
        });

        it('should ignore the registration if the passed key already exists', () => {
            // when
            const unregisterExtension = registerExtension(extension);
            registerExtension(extension);
            const registeredExtensions = getExtensions();
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

            // then
            expect(registeredExtensions).toEqual({
                MyFavEchopediaWebComponent: [
                    { component: mockComponent, extends: 'MyFavEchopediaWebComponent', key: 'unique-key' }
                ]
            });
            expect(consoleSpy).toHaveBeenCalledWith(
                '[Echo.Core.RegisterExtension] Ignoring extension registration with key "unique-key" to component "MyFavEchopediaWebComponent": an extension with this key already exists for this component.'
            );

            unregisterExtension();
        });
    });

    describe('registerMultipleExtensions()', () => {
        it('should register and unregister multiple extensions', () => {
            // given
            const extensionsToRegister: ExtensionRegistration[] = [
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
                    key: 'key-0',
                    extends: 'TheBestEchopediaWebComponent'
                }
            ];

            // when
            const unregisterFunctions = registerMultipleExtensions(extensionsToRegister);

            // then
            expect(getExtensions()).toStrictEqual({
                MyFavEchopediaWebComponent: [
                    {
                        key: 'unique-key',
                        extends: 'MyFavEchopediaWebComponent',
                        component: mockComponent
                    },
                    {
                        key: 'key-1',
                        extends: 'MyFavEchopediaWebComponent',
                        component: mockComponent
                    },
                    {
                        key: 'key-2',
                        extends: 'MyFavEchopediaWebComponent',
                        component: mockComponent
                    }
                ],
                TheBestEchopediaWebComponent: [
                    {
                        key: 'key-0',
                        extends: 'TheBestEchopediaWebComponent',
                        component: mockComponent
                    }
                ]
            });

            // when
            unregisterFunctions[0]();
            unregisterFunctions[2]();

            // then
            expect(getExtensions()).toStrictEqual({
                MyFavEchopediaWebComponent: [
                    {
                        key: 'key-1',
                        extends: 'MyFavEchopediaWebComponent',
                        component: mockComponent
                    }
                ],
                TheBestEchopediaWebComponent: [
                    {
                        key: 'key-0',
                        extends: 'TheBestEchopediaWebComponent',
                        component: mockComponent
                    }
                ]
            });

            // when
            unregisterFunctions[1]();
            unregisterFunctions[3]();

            // then
            expect(getExtensions()).toStrictEqual({
                MyFavEchopediaWebComponent: [],
                TheBestEchopediaWebComponent: []
            });
        });
    });
});

const mockComponent = () => {
    return null;
};

const extension: ExtensionRegistration = {
    key: 'unique-key',
    extends: 'MyFavEchopediaWebComponent',
    component: mockComponent
};

function getExtensions() {
    return readState(getCoreContext(), (state) => state.registry.extensions);
}
