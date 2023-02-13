import { getCoreContext, getCoreState, globalStore } from '../../state/globalState';

describe('getCoreContext()', () => {
    it('should return global context ', () => {
        // when
        const result = getCoreContext();

        // then
        expect(result).toStrictEqual({
            state: globalStore,
            actions: {}
        });
    });
});

describe('getCoreState()', () => {
    // when
    const result = getCoreState();

    // then
    expect(result).toStrictEqual(globalStore);
});
