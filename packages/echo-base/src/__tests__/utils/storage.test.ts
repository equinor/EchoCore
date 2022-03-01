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

    describe('EchoLocalStorage', () => {
        it('should get the correct string from localStorage', () => {
            // given
            const valueToSet = 'bar';
            (localStorage.getItem as jest.Mock).mockReturnValueOnce(valueToSet);
            storage.setItem<string>('foo', valueToSet);

            // when
            const actual = storage.getItem<string>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct object from localStorage', () => {
            // given
            const valueToSet = { foo: 'bar' };
            (localStorage.getItem as jest.Mock).mockReturnValueOnce(valueToSet);
            storage.setItem<{ foo: string }>('foo', valueToSet);

            // when
            const actual = storage.getItem<{ foo: string }>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct boolean from localStorage', () => {
            // given
            const valueToSet = true;
            (localStorage.getItem as jest.Mock).mockReturnValueOnce(valueToSet);
            storage.setItem<boolean>('foo', valueToSet);

            // when
            const actual = storage.getItem<boolean>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct number from localStorage', () => {
            // given
            const valueToSet = 1234;
            (localStorage.getItem as jest.Mock).mockReturnValueOnce(valueToSet);
            storage.setItem<number>('foo', valueToSet);

            // when
            const actual = storage.getItem<number>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('should get the correct date from localStorage', () => {
            // given
            const valueToSet = new Date();
            (localStorage.getItem as jest.Mock).mockReturnValueOnce(valueToSet);
            storage.setItem<Date>('foo', valueToSet);

            // when
            const actual = storage.getItem<Date>('foo');

            // then
            expect(actual).toEqual(valueToSet);
        });

        it('removeItem has been called with key', () => {
            storage.removeItem('foo');

            expect(localStorage.removeItem).toHaveBeenCalledWith('foo');
        });
    });
});
