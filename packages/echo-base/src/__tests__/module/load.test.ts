import { loadMetaData } from '../../module/load';

jest.mock('../../module/persist.ts', () => {
    return {
        persistLocalModuleMeta: jest.fn()
    };
});

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
});
const setup = jest.fn();

const moduleMeta = [
    {
        key: 'sA1',
        name: 'someApp',
        fileUri: 'file.js',
        version: '1',
        shortName: 'someApp'
    },
    {
        key: 'sA2',
        name: 'someApp',
        fileUri: 'file.js',
        version: '1',
        shortName: 'someApp'
    }
];

const echoModules = [
    {
        key: 'sA1',
        name: 'someApp',
        fileUri: 'file.js',
        version: '1',
        shortName: 'someApp',
        setup
    },
    {
        key: 'sA2',
        name: 'someApp',
        fileUri: 'file.js',
        version: '1',
        shortName: 'someApp',
        setup
    }
];

describe('Echo-Base load', () => {
    it('loadMetaData should return and persist module data', async () => {
        const fetchModules = jest.fn(() => Promise.resolve(moduleMeta));
        const modules = await loadMetaData(fetchModules);
        expect(modules).toEqual(moduleMeta);
    });

    it('loadMetaData should return empty array', async () => {
        const fetchModules = jest.fn(() => Promise.resolve({} as any));
        const modules = await loadMetaData(fetchModules);
        expect(modules).toEqual([]);
    });
});
