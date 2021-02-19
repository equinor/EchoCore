import { EchoModuleSettings } from '../../settings/echoModuleSettings';

describe('EchoModuleSettings', () => {
    const data = {
        '3': {
            test: 'settings 1'
        },
        '4': {
            test: 'settings 2'
        }
    };

    it('should getByKey', () => {
        const echoSettings = new EchoModuleSettings('1', { test: 'settings 1' }, true);
        new EchoModuleSettings('2', { test: 'settings 2' });
        expect(echoSettings.getByKey('1')).toEqual({
            test: 'settings 1'
        });
    });
    it('should return undefined', () => {
        const echoSettings = new EchoModuleSettings('6', { test: 'settings 1' }, true);
        expect(echoSettings.getByKey('5')).toEqual(undefined);
    });

    it('should gatAll state', () => {
        const echoSettings = new EchoModuleSettings('3', { test: 'settings 1' }, true);
        new EchoModuleSettings('4', { test: 'settings 2' });
        expect(echoSettings.getAll()).toEqual(data);
    });
});
