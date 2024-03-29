import { storage } from '../../utils/storage';

describe('Storage', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                setItem: jest.fn(),
                getItem: jest.fn(),
                removeItem: jest.fn()
            }
        });
    });

    function mockLocalStorage() {
        let valueInLocalStorage: string;
        (localStorage.getItem as jest.Mock).mockImplementationOnce(() => valueInLocalStorage);
        (localStorage.setItem as jest.Mock).mockImplementationOnce(
            (key: string, value: string) => (valueInLocalStorage = value)
        );
    }

    describe('EchoLocalStorage', () => {
        it('should get the correct string from localStorage', () => {
            // given
            const valueToSet = 'bar';
            mockLocalStorage();
            storage.setItem<string>('foo', valueToSet);

            // when
            const actual = storage.getItem<string>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct object from localStorage', () => {
            // given
            const valueToSet = { foo: 'bar', aDate: new Date() };
            mockLocalStorage();
            storage.setItem<{ foo: string }>('foo', valueToSet);

            // when
            const actual = storage.getItem<{ foo: string }>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct boolean from localStorage', () => {
            // given
            const valueToSet = true;
            mockLocalStorage();
            storage.setItem<boolean>('foo', valueToSet);

            // when
            const actual = storage.getItem<boolean>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct number from localStorage', () => {
            // given
            const valueToSet = 1234;
            mockLocalStorage();
            storage.setItem<number>('foo', valueToSet);

            // when
            const actual = storage.getItem<number>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct date from localStorage', () => {
            // given
            const valueToSet = new Date();
            mockLocalStorage();
            storage.setItem<Date>('foo', valueToSet);

            // when
            const actual = storage.getItem<Date>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should call localStorage.removeItem with the given key', () => {
            storage.removeItem('foo');

            expect(localStorage.removeItem).toHaveBeenCalledWith('foo');
        });
    });
});
