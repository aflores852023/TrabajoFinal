import React, { createContext, useContext, useState } from 'react';
import { workspaces } from '../data/data'; // src\data\data.js

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [contextWorkspaces, setContextWorkspaces] = useState(workspaces);

  return (
    <GlobalContext.Provider value={{ workspaces: contextWorkspaces, setContextWorkspaces }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContextWorkspaces = () => useContext(GlobalContext);
