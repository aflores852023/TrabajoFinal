

/**
 * Recupera los canales asociados a un ID de espacio de trabajo determinado del almacenamiento local.
 *
 * @param {number} workspaceId - El ID del espacio de trabajo.
 * @return {Array} Un arreglo de objetos de canal que pertenecen al ID de espacio de trabajo especificado.
 */
export const getChannelsForWorkspace = (workspaceId) => {
    const channels = JSON.parse(localStorage.getItem('channels')) || [];
    return channels.filter(channel => channel.workspaceId === workspaceId);
  };

/**
 * Agrega un canal a la lista de canales almacenados en el almacenamiento local del navegador.
 *
 * @param {Object} canal - El objeto de canal a agregar.
 * @return {void} Esta función no devuelve nada.
 */
export const addChannel = (channel) => {
    const channels = JSON.parse(localStorage.getItem('channels')) || [];
    channels.push(channel);
    localStorage.setItem('channels', JSON.stringify(channels));
  };