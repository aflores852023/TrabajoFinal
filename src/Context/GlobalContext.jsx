import { createContext, useContext } from "react";

const GlobalContextWorkspaces = createContext();


/**
 * Crea un proveedor de contexto para el contexto GlobalContextWorkspaces.
 *
 * @param {Object} props - El objeto de props.
 * @param {ReactNode} props.children - Los componentes hijos a renderizar dentro del contexto.
 * @return {ReactElement} El componente del proveedor de contexto.
 */
export const GlobalContextProvider = ({ children }) => {
    return (
        <GlobalContextWorkspaces.Provider
            value={{}}>{children}
        </GlobalContextWorkspaces.Provider>
    );
};

/**
 * Devuelve el valor del contexto GlobalContextWorkspaces.
 *
 * @return {Object} El valor del contexto GlobalContextWorkspaces.
 */
export const useGlobalContextWorkspaces = () => 
    useContext(GlobalContextWorkspaces)

