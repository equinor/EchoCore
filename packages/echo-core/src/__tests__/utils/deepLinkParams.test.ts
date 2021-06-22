import { getLinkParams, setDeepLinkParams } from '../../utils/deepLinkParams';
const { location } = window;

const getHrefSpy = jest.fn(() => 'https://dummy.com/api/?instCode=JSV&tagNo=AS1234');
const setHrefSpy = jest.fn((href) => href);

afterAll(() => {
    window.location = location;
});

beforeAll(() => {
    delete window.location;
    window.location = {} as Location;
    Object.defineProperty(window.location, 'href', {
        get: getHrefSpy,
        set: setHrefSpy
    });
    jest.spyOn(window.history, 'replaceState');
});
describe('deepLinkParams.test', () => {
    it('deepLinkParams should return instCode, tagNo but not search', () => {
        const { instCode, tagNo, search } = getLinkParams(['instCode', 'tagNo', 'search']);
        expect(instCode).toEqual('JSV');
        expect(tagNo).toEqual('AS1234');
        expect(search).toEqual(null);
    });
    it('setDeepLinkParams', () => {
        setDeepLinkParams('instCode', 'JSV2');
        jest.spyOn(window.history, 'replaceState');
        expect(window.history.replaceState).toHaveBeenCalledWith({}, '', 'undefined?instCode=JSV2&tagNo=AS1234');
        expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    });
});
