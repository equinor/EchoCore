import { generateRandomId } from './randomIdGenerator';

describe('generateRandomId', () => {
    it('should return a six character string', () => {
        const id = generateRandomId();
        expect(id.length).toBe(6);
    });
    it('should return different strings', () => {
        const id1 = generateRandomId();
        const id2 = generateRandomId();
        expect(id1).not.toEqual(id2);
    });
});
