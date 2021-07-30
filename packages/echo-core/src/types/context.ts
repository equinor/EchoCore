import React from 'react';

export interface ContextProviderProps {
    children: React.ReactNode;
}

/**
 * A React Context provider, a react functional component with able to wrap other components.
 * This by providing the  children prop.
 *
 *```
 const Provider: ContextProvider = ({ children }: ContextProviderProps) => {
    const Context = React.createContext({ test: 'Hello World!' });
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
        );
};
 *```
 **/

export type ContextProvider = React.FunctionComponent<ContextProviderProps>;
