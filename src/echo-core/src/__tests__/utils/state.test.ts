import { Dict } from '../../types';
import { addOrOverwriteWithKey, removeWithKey } from '../../utils/state';

interface TestUserType {
    name: string;
    lastName: string;
}
describe('State sett and remove utils', () => {
    describe('addOrOverwriteWithKey', () => {
        const item = {
            name: 'Tom',
            lastName: 'Jones'
        };
        const item2 = {
            name: 'John',
            lastName: 'Johnsen'
        };
        const state: Dict<TestUserType> = { a: item };
        const expected: Dict<TestUserType> = { a: item, b: item2 };

        it('should Add item', () => {
            const result = addOrOverwriteWithKey(state, 'b', item2);
            expect(result).toEqual(expected);
        });
        it('should overwrite item', () => {
            const result = addOrOverwriteWithKey(state, 'a', item2);
            expect(result).toEqual({ a: item2 });
        });
    });

    describe('addOrOverwriteWithKey', () => {
        const item = {
            name: 'Tom',
            lastName: 'Jones'
        };
        const item2 = {
            name: 'John',
            lastName: 'Johnsen'
        };
        const state: Dict<TestUserType> = { a: item };
        const stateWithTwoItems: Dict<TestUserType> = { a: item, b: item2 };

        it('should Add item', () => {
            const result = removeWithKey(state, 'a');
            expect(result).toEqual({});
        });
        it('should overwrite item', () => {
            const result = removeWithKey(stateWithTwoItems, 'b');
            expect(result).toEqual(state);
        });
    });
});
