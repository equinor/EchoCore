import { BaseError } from '@equinor/echo-base';
import { registerExtension, registerMultipleExtensions } from '../../../actions/coreActions/extensions';
import { readState } from '../../../actions/coreActions/globalActions';
import { getCoreContext } from '../../../state/globalState';
import { ExtensionRegistration, ExtensionRegistry } from './../../../types/registry/extension.types';

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
            // given
            expect.assertions(1);
            const expectedError = new BaseError({
                name: 'EchoExtensionKeyAlreadyExistsError',
                message: `[Echo.Core.RegisterExtension] Duplicate registration with key "unique-key" for component "MyFavEchopediaWebComponent": an extension with this key already exists for this component.`,
                innerError: {
                    extensionKey: 'unique-key',
                    extendableComponentName: 'extendableComponentName'
                }
            });
            // when
            const unregisterExtension = registerExtension(extension);

            // then
            try {
                registerExtension(extension);
            } catch (error) {
                expect(error).toEqual(expectedError);
            }
            unregisterExtension();
        });

        it('should handle multiple calls of one given unregister function', () => {
            // given
            const unregisterExtension = registerExtension(extension);

            // when
            unregisterExtension();
            unregisterExtension();
            const registeredExtensions = getExtensions();

            // then
            expect(registeredExtensions).toStrictEqual({
                MyFavEchopediaWebComponent: []
            });
        });
    });

    describe('registerMultipleExtensions()', () => {
        let extensionsToRegister: ExtensionRegistration[];

        beforeEach(() => {
            extensionsToRegister = [
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
        });
        it('should register and unregister multiple extensions', () => {
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

const mockComponent = (): null => {
    return null;
};

const extension: ExtensionRegistration = {
    key: 'unique-key',
    extends: 'MyFavEchopediaWebComponent',
    component: mockComponent
};

function getExtensions(): ExtensionRegistry {
    return readState(getCoreContext(), (state) => state.registry.extensions);
}
