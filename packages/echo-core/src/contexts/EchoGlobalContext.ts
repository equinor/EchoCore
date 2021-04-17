import { createContext } from 'react';
import { CoreContext } from '../state/globalState';
import { GlobalStateContext } from '../types/state';

/**
 * React Context of the Echo CoreContext
 * `Echo Framework only`
 */
export default createContext<GlobalStateContext>(CoreContext);
