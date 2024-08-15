// helpers/channels.js

/**
 * Recupera los canales asociados a un ID de espacio de trabajo determinado del almacenamiento local.
 *
 * @param {number} workspaceId - El ID del espacio de trabajo.
 * @return {Array} Un arreglo de objetos de canal que pertenecen al ID de espacio de trabajo especificado.
 */
export const getChannelsForWorkspace = (workspaceId) => {
  const channels = JSON.parse(localStorage.getItem('channels')) || [];
  const filteredChannels = channels.filter(channel => channel.workspaceId === workspaceId);
  return filteredChannels;
};

/**
 * Agrega un canal a la lista de canales almacenados en el almacenamiento local del navegador.
 *
 * @param {Object} newChannel - El objeto de canal a agregar.
 * @return {Array} La lista actualizada de canales.
 */
export const addChannel = (newChannel) => {
  const channels = JSON.parse(localStorage.getItem('channels')) || [];
  channels.push(newChannel);
  localStorage.setItem('channels', JSON.stringify(channels));
  return channels;
};

/**
 * Obtiene el siguiente ID disponible para un canal en el almacenamiento local.
 *
 * @return {number} El próximo ID disponible para un canal.
 */
export const getNextChannelId = () => {
  const channels = JSON.parse(localStorage.getItem('channels')) || [];
  if (channels.length === 0) {
    return 1;
  }
  const lastChannelId = Math.max(...channels.map(channel => channel.id));
  return lastChannelId + 1;
};

/**
 * Añade un workspaceId a un canal existente y lo guarda en localStorage.
 * 
 * @param {number} workspaceId - El ID del workspace que se añadirá.
 * @param {number} channelId - El ID del canal que se va a actualizar.
 * @return {Array} La lista actualizada de canales.
 */
export const addWorkspaceIdToChannel = (workspaceId, channelId) => {
  const channels = JSON.parse(localStorage.getItem('channels')) || [];
  const updatedChannels = channels.map(channel =>
    channel.id === channelId ? { ...channel, workspaceId: workspaceId } : channel
  );
  localStorage.setItem('channels', JSON.stringify(updatedChannels));
  return updatedChannels;
};
