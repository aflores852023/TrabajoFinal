import { createContext, useContext } from "react";

const GlobalContextWorkspaces = createContext();

export const GlobalContextProvider = ({ children }) => {
    return (
        <GlobalContextWorkspaces.Provider
            value={{}}>{children}
        </GlobalContextWorkspaces.Provider>
    );
};

export const useGlobalContextWorkspaces = () => 
    useContext(GlobalContextWorkspaces)

