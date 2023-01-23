import React, { createContext, useContext } from 'react';

import { GetSolution } from './solutions';
import { IGetSolution } from 'types';

const Context = createContext<IGetSolution>({} as IGetSolution);

export const useApp = () => useContext(Context);

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const solutions = GetSolution();

  return <Context.Provider value={{ ...solutions }} children={children} />;
};

export default StateProvider;
