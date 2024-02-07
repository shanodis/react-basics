import React, { createContext, FC, ReactNode, useContext } from 'react';

type DataContextType = {
  id: number;
  fullName: string;
  email: string;
};

// const DataContext = createContext(null) as unknown as React.Context<DataContextType>;

const contextDefaultValue: DataContextType = {
  id: 0,
  fullName: '',
  email: '',
};

const DataContext = createContext<DataContextType>(contextDefaultValue);

type DataContextProviderProps = {
  value: DataContextType;
  children: ReactNode;
};

export const DataProvider: FC<DataContextProviderProps> = ({ children, value }) => {
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => useContext(DataContext);