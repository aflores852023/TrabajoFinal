import React, { createContext, useContext, useState } from 'react';
import { workspaces } from '../data/data'; // src\data\data.js

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [contextWorkspaces, setContextWorkspaces] = useState(workspaces);

  return (
    <GlobalContext.Provider value={
      { 
      workspaces: contextWorkspaces, setContextWorkspaces, 
      handleCreateWorkspaces: handleCreateWorkspaces
    
    }
      
      }>
      {children}

    </GlobalContext.Provider>
  );
};

export const useGlobalContextWorkspaces = () => useContext(GlobalContext);

const handleCreateWorkspaces = (e) => {
  // TODO: Crear un nuevo Workspace
  // TODO: Actualizar el contexto de Workspaces para reflejar el nuevo Workspace
  e.preventDefault()
  console.log('Create Workspaces')
}