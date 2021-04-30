/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkFunction } from '../../module/utils';

describe('Echo-Base -> utils.ts', () => {
    it('checkFunction -> should return true if function is defined', () => {
        console.warn = jest.fn();
        const func = (): void => {};
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
});
