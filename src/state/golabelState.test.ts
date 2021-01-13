import { deref } from '@dbeining/react-atom';
import { createContext } from 'react';
import { ActivePanel } from '../types/panel';
import { GlobalState, GlobalStateContext } from '../types/state';
import {
    createGlobalApplicationContext,
    createGlobalState,
    getContext,
    getCoreContext,
    getCoreState
} from './globalState';

describe('createGlobalState', () => {
    it('should return empty Atom global state ', () => {
        const expected: GlobalState = {
            modules: [],
            panels: [],
            activePanel: ActivePanel.None,
            activeModule: '',
            moduleState: {},
            legendOptions: {
                isActive: true
            }
        };
        const result = createGlobalState();
        expect(deref(result)).toEqual(expected);
    });
});

describe('createGlobalApplicationContext', () => {
    it('should return global context ', () => {
        const globalState = createGlobalState();
        const expected: GlobalStateContext = {
            state: globalState
        };
        const result = createGlobalApplicationContext(globalState);
        expect(result).toEqual(expected);
    });
});

describe('getCoreContext', () => {
    it('should return global context ', () => {
        const globalState = createGlobalState();
        const expected = createGlobalApplicationContext(globalState);
        const result = getCoreContext();
        expect(result).toEqual(expected);
    });
});

describe('getCoreState', () => {
    it('should return global state ', () => {
        const expected: GlobalState = {
            modules: [],
            panels: [],
            activePanel: ActivePanel.None,
            activeModule: '',
            moduleState: {},
            legendOptions: {
                isActive: true
            }
        };
        const result = getCoreState();
        expect(deref(result)).toEqual(expected);
    });
});

describe('getContext', () => {
    it('should return react context ', () => {
        const expected = createContext<GlobalStateContext>(getCoreContext());
        const result = getContext();
        expect(result).toEqual(expected);
    });
});
