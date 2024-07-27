import { createContext, useContext } from "react";

const GlobalContextWorkspaces = createContext();

export const GlobalContextProvider = ({ children }) => {
    return (
        <GlobalContext.Provider
            value={{}}>{children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => 
    useContext(GlobalContextWorkspaces)

