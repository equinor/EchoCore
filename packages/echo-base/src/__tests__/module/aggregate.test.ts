import { createModule, createModules } from '../../module/aggregate';
describe('Echo-Base aggregate module', () => {
    it('createModules calls the setup method of the module', async () => {
        const create: any = jest.fn(() => ({}));
        const setup = jest.fn();
        await createModule(create, {
            key: 'any',
            shortName: 'any',
            name: 'any',
            version: '1.0.0',
            fileUri: 'test.js',
            setup
        });
        expect(create).toBeCalled();
        expect(setup).toBeCalled();
    });

    it('creatModule does not call due to invalid api creator', async () => {
        const setup = jest.fn();
        await createModule(undefined, {
            key: 'any',
            shortName: 'any',
            name: 'any',
            version: '1.0.0',
            fileUri: 'test.js',
            setup: 5 as any
        });
        expect(setup).not.toBeCalled();
    });

    it('createModules calls creatModule on each module', async () => {
        const create: any = jest.fn(() => ({}));
        const setup = jest.fn();
        await createModules(create, [
            {
                key: 'any',
                shortName: 'any',
                name: 'any',
                version: '1.0.0',
                fileUri: 'test.js',
                setup
            },
            {
                key: 'any',
                shortName: 'any',
                name: 'any',
                version: '1.0.0',
                fileUri: 'test.js',
                setup
            }
        ]);
        expect(create).toHaveBeenCalledTimes(2);
        expect(setup).toHaveBeenCalledTimes(2);
    });
});
