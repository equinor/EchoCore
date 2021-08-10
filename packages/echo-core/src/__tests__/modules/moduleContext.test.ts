import React from 'react';
import { readState } from '../../actions/coreActions/globalActions';
import {
    registerModuleContext,
    registerModuleState,
    registerModuleStateAndContext,
    setModuleState
} from '../../modules/moduleContext';
import { getCoreContext } from '../../state/globalState';
import { GlobalState } from '../../types/state';

describe('moduleContext', () => {
    const mockModuleState = {
        test: 'test'
    };
    function state(): unknown {
        return readState(getCoreContext(), (state: GlobalState) => state.moduleState);
    }
    function moduleContext(): unknown {
        return readState(getCoreContext(), (state: GlobalState) => state.moduleContext);
    }

    const context = React.createContext(mockModuleState);
    const preState = state();
    const preContext = state();

    describe('setModuleState', () => {
        it('should set the module state', () => {
            setModuleState(mockModuleState);
            const postState = state();
            expect(preState).not.toBe(mockModuleState);
            expect(postState).toEqual(mockModuleState);
        });
    });
    describe('registerModuleState', () => {
        it('should set the module state', () => {
            registerModuleState(mockModuleState);
            const postState = state();
            expect(preState).not.toBe(mockModuleState);
            expect(postState).toEqual(mockModuleState);
        });
    });
    describe('registerModuleContext', () => {
        it('should set the module state', () => {
            registerModuleContext(context);
            const postContext = moduleContext();
            expect(preContext).not.toBe(context);
            expect(postContext).toEqual(context);
        });
    });
    describe('registerModuleStateAndContext', () => {
        it('should set the module state', () => {
            registerModuleStateAndContext(mockModuleState, context);
            const postState = state();
            const postContext = moduleContext();
            expect(preState).not.toBe(mockModuleState);
            expect(postState).toEqual(mockModuleState);
            expect(preContext).not.toBe(context);
            expect(postContext).toEqual(context);
        });
    });
});
