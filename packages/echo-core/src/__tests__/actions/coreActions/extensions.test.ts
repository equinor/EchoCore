import { registerExtension } from '../../../actions/coreActions/extensions';
import { readState } from '../../../actions/coreActions/globalActions';
import { getCoreContext } from '../../../state/globalState';
import { ExtensionRegistration } from './../../../types/registry/extension.types';

describe('registerExtension()', () => {
    const mockComponent = () => {
        return null;
    };

    const extension: ExtensionRegistration = {
        key: 'unique-key',
        extends: 'MyFavEchopediaWebComponent',
        component: mockComponent
    };
    it('should register and unregister a given extension into the state', () => {
        // given

        // when
        const unregisterExtension = registerExtension(extension);
        let registeredExtensions = readState(getCoreContext(), (state) => state.registry.extensions);

        // then
        expect(registeredExtensions).toEqual({
            MyFavEchopediaWebComponent: [
                { component: mockComponent, extends: 'MyFavEchopediaWebComponent', key: 'unique-key' }
            ]
        });

        unregisterExtension();
        registeredExtensions = readState(getCoreContext(), (state) => state.registry.extensions);
        expect(registeredExtensions).toStrictEqual({
            MyFavEchopediaWebComponent: []
        });
    });
});
