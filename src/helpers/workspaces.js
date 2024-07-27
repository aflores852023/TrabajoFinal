import { saveTestDataWorkspaces } from '../helpers/testdata'

/**
 * Recupera la lista de espacios de trabajo desde el almacenamiento local. 
 * Si ya se han guardado los espacios de trabajo,
 * se analizan desde JSON y se devuelven. De lo contrario,
 * se guardan los datos de prueba de los espacios de trabajo y se devuelven.
 *
 * @return {Array} Un array de objetos de espacio de trabajo.
 */
export const getWorkspaces = () => {
    const workspaces_saved = localStorage.getItem('workspaces')
        if (workspaces_saved){
                return JSON.parse(workspaces_saved)   
       }
 }