/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleSettings } from '../../settings/moduleSettings';

describe('ModuleSettings', () => {
    const pdf = {
        id: 1,
        title: 'PDF'
    };
    const moduleSettings = new ModuleSettings('pdf', pdf);
    const testSettings = new ModuleSettings('test', 'test');

    const isKeyUnique = jest.spyOn(ModuleSettings.prototype as any, 'isKeyUnique');
    const setup = jest.spyOn(ModuleSettings.prototype as any, 'setup');
    it('should test is Key Unique', () => {
        expect(() => new ModuleSettings('pdf', pdf)).toThrow(TypeError('Key needs to be uniq!'));
        expect(setup).toHaveBeenCalled();
    });

    it('should test please enter key', () => {
        expect(() => new ModuleSettings('', pdf)).toThrow(TypeError('Please enter a key!'));
        expect(isKeyUnique).toHaveBeenCalled();
    });

    it('should get pdf state ', () => {
        expect(moduleSettings.get()).toEqual(pdf);
    });

    it('should update pdf state ', () => {
        const pdfUpdated = {
            id: 2,
            title: 'new title'
        };
        moduleSettings.set(pdfUpdated);
        expect(moduleSettings.get()).toEqual(pdfUpdated);
    });

    it('should update partial pdf state ', () => {
        const pdfUpdatedPartial = {
            id: 2,
            title: 'partial'
        };
        moduleSettings.set({ title: 'partial' });
        expect(moduleSettings.get()).toEqual(pdfUpdatedPartial);
    });

    it('should update none object state ', () => {
        testSettings.set('partial');
        expect(testSettings.get()).toEqual('partial');
    });

    it('should delete state', () => {
        testSettings.clear();
        expect(testSettings.get()).toEqual({});
    });
});
