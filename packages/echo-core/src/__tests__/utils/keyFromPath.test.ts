import { getKeyFromPath, getPathFromKey } from '../../utils/path';

describe('getKeyFromPath', () => {
    it('should return the first key from a path', () => {
        const testPath =
            '/viewer?instCode=JSV&search=pt0105&tagNo=A-20PT0105&docNo=C151-AS-P-XB-20020-01&fileId=3973202';
        const result = getKeyFromPath(testPath);
        expect(result).toEqual('viewer');
    });
    it('should return empty string if there is no path', () => {
        const testPath = '/';
        const result = getKeyFromPath(testPath);
        expect(result).toEqual('');
    });
    it('should return empty string if there is no path but there is a param', () => {
        const testPath = '/?instCode=JSV';
        const result = getKeyFromPath(testPath);
        expect(result).toEqual('');
    });
});
describe('getPathFromKey', () => {
    it('should always return path if path is provided', () => {
        const testPath = '/viewer';
        const result = getPathFromKey(testPath);
        expect(result).toEqual('/viewer');
    });
    it('should always return path if path is provided', () => {
        const testPath = '//viewer';
        const result = getPathFromKey(testPath);
        expect(result).toEqual('/viewer');
    });
    it('will return empty path', () => {
        const testPath = '//';
        const result = getPathFromKey(testPath);
        expect(result).toEqual('/');
    });
    it('will return empty path', () => {
        const result = getPathFromKey(undefined);
        expect(result).toEqual('/');
    });
    it('should always return path ', () => {
        const testPath = 'viewer';
        const result = getPathFromKey(testPath);
        expect(result).toEqual('/viewer');
    });
});
