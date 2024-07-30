
/**
 * Guarda los espacios de trabajo proporcionados en el almacenamiento local como una cadena JSON.
 *
 * @param {Array} workspaces - Los espacios de trabajo a guardar.
 * @return {void} Esta función no devuelve nada.
 */
export const saveTestDataWorkspaces = (workspaces) => {
    const workspaces_to_json = JSON.stringify(workspaces);
    localStorage.setItem('workspaces', workspaces_to_json);
}


/**
 * Guarda los canales proporcionados en el almacenamiento local como una cadena JSON.
 *
 * @param {Array} channels - Los canales que se van a guardar.
 * @return {void} Esta función no devuelve nada.
 */
export const saveTestDataChannels = (channels) => {
    const channels_to_json = JSON.stringify(channels);
    localStorage.setItem('channels', channels_to_json);
}


/**
 * Guarda el array de mensajes dado como una cadena JSON en el almacenamiento local con la clave 'messages'.
 *
 * @param {Array} mensajes - El array de mensajes a guardar.
 * @return {void}
*/
export const saveTestDataMessages = (messages) => {
    const messages_to_json = JSON.stringify(messages);
    localStorage.setItem('messages', messages_to_json);
}   

/**
 * Guarda el arreglo de usuarios dado como una cadena JSON en el almacenamiento local con la clave 'users'.
 *
 * @param {Array} usuarios - El arreglo de usuarios que se guardará.
 * @return {void} Esta función no devuelve nada.
 */
export const saveTestDataUsers = (users) => {
    const users_to_json = JSON.stringify(users);
    localStorage.setItem('users', users_to_json);
}  


/**
 * Guarda los datos de mensajes directos en el almacenamiento local.
 *
 * @param {Array} directMessages - El array de mensajes directos a guardar.
 * @return {void} No retorna nada.
 */
export const saveTestDataDirectMessages = (directMessages) => {
    const directMessages_to_json = JSON.stringify(directMessages);
    localStorage.setItem('directMessages', directMessages_to_json);
}  


/**
 * Crea datos de prueba de workspaces agregando nuevos workspaces a la lista existente de workspaces.
 *
 * @param {Array} NewWorkspaces - Un array de nuevos workspaces que se agregarán a la lista existente de workspaces.
 * @return {void} Esta función no devuelve un valor.
 */
export const createTestDataWorkspaces = (NewWorskspaces) => {
    const workspaces = [ ...workspaces, ...NewWorskspaces ];
    saveTestDataWorkspaces(workspaces);
}   