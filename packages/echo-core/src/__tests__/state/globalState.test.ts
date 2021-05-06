import { deref } from '@dbeining/react-atom';
import { defaultGlobalState } from '../../state/defaultStates';
import { createGlobalApplicationContext, createGlobalState, getCoreContext } from '../../state/globalState';

describe('createGlobalState', () => {
    it('should return empty Atom global state ', () => {
        const result = deref(createGlobalState(defaultGlobalState));
        expect(result).toStrictEqual(defaultGlobalState);
    });
});

describe('createGlobalApplicationContext', () => {
    it('should return global context ', () => {
        const globalState = createGlobalState(defaultGlobalState);
        const expected = {
            state: globalState
        };
        const result = createGlobalApplicationContext(globalState);
        expect(result).toStrictEqual(expected);
    });
});

describe('getCoreContext', () => {
    it('should return global context ', () => {
        const globalState = createGlobalState(defaultGlobalState);
        const expected = createGlobalApplicationContext(globalState);
        const result = getCoreContext();
        expect(result).toStrictEqual(expected);
    });
});
