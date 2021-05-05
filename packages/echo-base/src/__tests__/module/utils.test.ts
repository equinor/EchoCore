/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkFunction, filterExcludePrivateModulesInProduction } from '../../module/utils';
import { EchoModule } from '../../types/module';

describe('Echo-Base -> utils.ts', () => {
    it('checkFunction -> should return true if function is defined', () => {
        console.warn = jest.fn();
        const func = (): void => {
            //test
        };
        const result = checkFunction(func as any, 'error');
        expect(result).toEqual(true);
        expect(console.warn).toBeCalledTimes(0);
    });
    it('checkFunction -> should return false if function is not defined', () => {
        console.warn = jest.fn();
        const result = checkFunction(true as any, 'error');
        expect(result).toEqual(false);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenCalledWith('error');
    });

    it('filterModule -> should return return all modules in dev', () => {
        const setupMock = jest.fn();
        const appModules = [
            {
                setup: setupMock,
                key: 'sA1',
                name: 'someApp1',
                fileUri: 'file1.js',
                version: '1',
                shortName: 'someApp1',
                private: true
            },
            {
                setup: setupMock,
                key: 'sA2',
                name: 'someApp2',
                fileUri: 'file2.js',
                version: '1',
                shortName: 'someApp2'
            }
        ] as EchoModule[];
        const result = filterExcludePrivateModulesInProduction(appModules, () => false);
        expect(result).toEqual(appModules);
    });

    it('filterModule -> should not return return all modules in pro if set to private', () => {
        const setupMock = jest.fn();
        const prodModules = [
            {
                setup: setupMock,
                key: 'sA2',
                name: 'someApp2',
                fileUri: 'file.js',
                version: '1',
                shortName: 'someApp2'
            }
        ];
        const appModules = [
            ...prodModules,
            {
                setup: setupMock,
                key: 'sA1',
                name: 'someApp1',
                fileUri: 'file.js',
                version: '1',
                shortName: 'someApp1',
                private: true
            }
        ] as EchoModule[];
        const result = filterExcludePrivateModulesInProduction(appModules, () => true);
        expect(result).toEqual(prodModules);
    });
});
