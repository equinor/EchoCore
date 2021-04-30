/* eslint-disable @typescript-eslint/no-explicit-any */
import { setupSingleModule } from '../../module/setup';

describe('Setting up Modules', () => {
    it('works if setup is available', () => {
        console.warn = jest.fn();
        const setupMock = jest.fn();
        const api = {};
        setupSingleModule(
            {
                setup: setupMock
            } as any,
            api as any
        );
        expect(setupMock).toHaveBeenCalledWith(api);
        expect(console.warn).toHaveBeenCalledTimes(0);
    });

    it('emits error but does not crash if setup crashes', () => {
        const setupMock = jest.fn();
        console.warn = jest.fn();
        const api = {};
        setupSingleModule(
            {
                setup(api) {
                    setupMock(api);
                    throw new Error('Did something stupid');
                    setupMock(api);
                }
            } as any,
            api as any
        );
        expect(setupMock).toHaveBeenCalledTimes(1);
        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('emits error but does not crash if no setup is available', () => {
        const setupMock = jest.fn();
        console.warn = jest.fn();
        const api = {};
        setupSingleModule({} as any, api as any);
        expect(setupMock).toHaveBeenCalledTimes(0);
        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('emits error but does not crash if no module is available', () => {
        const setupMock = jest.fn();
        console.warn = jest.fn();
        const api = {} as any;
        setupSingleModule(undefined as any, api);
        expect(setupMock).toHaveBeenCalledTimes(0);
        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('emits error but does not crash if wrong type supplied', () => {
        const setupMock = jest.fn();
        console.warn = jest.fn();
        const api = {} as any;
        setupSingleModule((() => {}) as any, api);
        expect(setupMock).toHaveBeenCalledTimes(0);
        expect(console.warn).toHaveBeenCalledTimes(1);
    });
});
