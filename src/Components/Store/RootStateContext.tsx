import React from 'react';
import { Store } from './store';

type RootStateContextValue = {
    nodesStore: Store
}

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue)

const nodesStore = new Store();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <RootStateContext.Provider value={{ nodesStore }}>
        {children}
    </RootStateContext.Provider>
}

export const useRootStore = () => React.useContext(RootStateContext)