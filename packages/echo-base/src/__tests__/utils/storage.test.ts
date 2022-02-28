import { storage } from '../../utils/storage';

describe('Storage', () => {
    function mockLocalStorage<T>(mockObj: T): T {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__defineGetter__('localStorage', () => mockObj);
        return mockObj;
    }
    describe('EchoLocalStorage', () => {
        it('getItem string from local storage', () => {
            const localStorage = mockLocalStorage({
                getItem: jest.fn(() => 'bar')
            });
            const result = storage.getItem<string>('foo');
            expect(result).toEqual('bar');
            expect(localStorage.getItem).toHaveBeenCalledTimes(1);
        });

        it('getItem from local storage', () => {
            const item = { item: 'bar' };
            const localStorage = mockLocalStorage({
                getItem: jest.fn(() => JSON.stringify(item))
            });
            const result = storage.getItem<{ item: string }>('foo');

            expect(result).toEqual(item);
            expect(localStorage.getItem).toHaveBeenCalledTimes(1);
        });

        it('getItem from local storage as undefined', () => {
            const localStorage = mockLocalStorage({
                getItem: jest.fn(() => undefined)
            });
            const result = storage.getItem('foo');

            expect(undefined).toEqual(result);
            expect(localStorage.getItem).toHaveBeenCalledTimes(1);
        });

        it('removeItem has been called with key', () => {
            const localStorage = mockLocalStorage({
                removeItem: jest.fn()
            });
            storage.removeItem('foo');

            expect(localStorage.removeItem).toBeCalledWith('foo');
            expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
        });

        it('setItem has been called with key and string', () => {
            const localStorage = mockLocalStorage({
                setItem: jest.fn()
            });
            storage.setItem<string>('foo', 'bar');

            expect(localStorage.setItem).toBeCalledWith('foo', JSON.stringify('bar'));
            expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        });

        it('setItem has been called with key and data', () => {
            const data = { item: 'bar' };
            const localStorage = mockLocalStorage({
                setItem: jest.fn()
            });
            storage.setItem('foo', data);

            expect(localStorage.setItem).toBeCalledWith('foo', JSON.stringify(data));
            expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        });
    });
});
