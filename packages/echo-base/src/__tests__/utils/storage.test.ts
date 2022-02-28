import { storage } from '../../utils/storage';

describe('Storage', () => {
    function mockLocalStorage<T>(mockObj: T): T {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__defineGetter__('localStorage', () => mockObj);
        return mockObj;
    }
    describe('EchoLocalStorage', () => {
        it('should set and get the correct string in localStorage', () => {
            // given
            const valueToSet = 'bar';
            let valueInLocalStorage: string;
            mockLocalStorage({
                setItem: jest.fn((key: string, value: string) => (valueInLocalStorage = value)),
                getItem: jest.fn(() => valueInLocalStorage)
            });
            storage.setItem<string>('foo', valueToSet);

            // when
            const actual = storage.getItem<string>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should set and get the correct object in localStorage', () => {
            // given
            const valueToSet = { foo: 'bar' };
            let valueInLocalStorage: string;
            mockLocalStorage({
                setItem: jest.fn((key: string, value: string) => (valueInLocalStorage = value)),
                getItem: jest.fn(() => valueInLocalStorage)
            });
            storage.setItem<{ foo: string }>('foo', valueToSet);

            // when
            const actual = storage.getItem<{ foo: string }>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should set and get the correct boolean in localStorage', () => {
            // given
            const valueToSet = true;
            let valueInLocalStorage: string;
            mockLocalStorage({
                setItem: jest.fn((key: string, value: string) => (valueInLocalStorage = value)),
                getItem: jest.fn(() => valueInLocalStorage)
            });
            storage.setItem<boolean>('foo', valueToSet);

            // when
            const actual = storage.getItem<boolean>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should set and get the correct number in localStorage', () => {
            // given
            const valueToSet = 1234;
            let valueInLocalStorage: string;
            mockLocalStorage({
                setItem: jest.fn((key: string, value: string) => (valueInLocalStorage = value)),
                getItem: jest.fn(() => valueInLocalStorage)
            });
            storage.setItem<number>('foo', valueToSet);

            // when
            const actual = storage.getItem<number>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should set and get the correct date in localStorage', () => {
            // given
            const valueToSet = new Date();
            let valueInLocalStorage: string;
            mockLocalStorage({
                setItem: jest.fn((key: string, value: string) => (valueInLocalStorage = value)),
                getItem: jest.fn(() => valueInLocalStorage)
            });
            storage.setItem<Date>('foo', valueToSet);

            // when
            const actual = storage.getItem<Date>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('removeItem has been called with key', () => {
            const localStorage = mockLocalStorage({
                removeItem: jest.fn()
            });
            storage.removeItem('foo');

            expect(localStorage.removeItem).toBeCalledWith('foo');
            expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
        });
    });
});
