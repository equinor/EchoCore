import { deref } from '@dbeining/react-atom';
import { createContext } from 'react';
import {
    createGlobalApplicationContext,
    createGlobalState,
    getContext,
    getCoreContext,
    getCoreState
} from '../../state/globalState';
import { ActivePanel } from '../../types/panel';
import { GlobalStateContext } from '../../types/state';

describe('createGlobalState', () => {
    it('should return empty Atom global state ', () => {
        const expected = {
            modules: [],
            panels: [],
            activePanel: ActivePanel.None,
            activeModule: '',
            moduleState: {},
            userProfile: undefined,
            userPhotoUrl: undefined,
            legendOptions: {
                isActive: true
            }
        };

        const result = createGlobalState();
        expect(deref(result)).toStrictEqual(expected);
    });
});

describe('createGlobalApplicationContext', () => {
    it('should return global context ', () => {
        const globalState = createGlobalState();
        const expected = {
            state: globalState
        };
        const result = createGlobalApplicationContext(globalState);
        expect(result).toStrictEqual(expected);
    });
});

describe('getCoreContext', () => {
    it('should return global context ', () => {
        const globalState = createGlobalState();
        const expected = createGlobalApplicationContext(globalState);
        const result = getCoreContext();
        expect(result).toStrictEqual(expected);
    });
});

describe('getCoreState', () => {
    it('should return global state ', () => {
        const expected = {
            modules: [],
            panels: [],
            activePanel: ActivePanel.None,
            activeModule: '',
            moduleState: {},
            userProfile: undefined,
            userPhotoUrl: undefined,
            legendOptions: {
                isActive: true
            }
        };
        const result = getCoreState();
        expect(deref(result)).toStrictEqual(expected);
    });
});

describe('getContext', () => {
    it('should return react context ', () => {
        const expected = createContext<GlobalStateContext>(getCoreContext());
        const result = getContext();
        expect(result).toEqual(expected);
    });
});
