import React, { createContext, useContext, useState } from 'react';
import { workspaces as initialWorkspaces } from '../data/data'; // src\data\data.js

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [contextWorkspaces, setContextWorkspaces] = useState(initialWorkspaces);

  const handleCreateWorkspaces = (newWorkspace) => {
    // Añadir el nuevo workspace a la lista de workspaces existentes
    const updatedWorkspaces = [...contextWorkspaces, newWorkspace];
    
    // Actualizar el contexto con la nueva lista de workspaces
    setContextWorkspaces(updatedWorkspaces);

    // Guardar en el localStorage si es necesario
    localStorage.setItem('workspaces', JSON.stringify(updatedWorkspaces));
  };

  return (
    <GlobalContext.Provider value={{ 
      workspaces: contextWorkspaces, 
      setContextWorkspaces, 
      handleCreateWorkspaces 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContextWorkspaces = () => useContext(GlobalContext);

/* import React, { createContext, useContext, useState } from 'react';
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
} */