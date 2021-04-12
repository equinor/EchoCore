import { makeUniqBy } from '../../utils/uniq';

interface TestArray {
    n: number;
}
interface TestArrayUndefined {
    n?: number;
}

describe('Make Array Unique', () => {
    it('should make array uniq by prop n', () => {
        const array: TestArray[] = [{ n: 1 }, { n: 1 }, { n: 2 }, { n: 3 }];
        const predictedArray: TestArray[] = [{ n: 1 }, { n: 2 }, { n: 3 }];
        const result = makeUniqBy('n', array);
        expect(result).toEqual(predictedArray);
    });
    it('should handle empty array', () => {
        const array2: TestArray[] = [];
        const result = makeUniqBy('n', array2);
        expect(result).toEqual([]);
    });
    it('should handle array with undefined prop', () => {
        const array3: TestArrayUndefined[] = [{ n: 1 }, { n: 1 }, { n: undefined }, { n: 2 }, { n: 3 }];
        const predictedArrayUndefined: TestArrayUndefined[] = [{ n: 1 }, { n: undefined }, { n: 2 }, { n: 3 }];
        const result = makeUniqBy('n', array3);
        expect(result).toEqual(predictedArrayUndefined);
    });
});
