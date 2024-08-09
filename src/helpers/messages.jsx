const messages = JSON.parse(localStorage.getItem('messages'));
/**
 * Recupera mensajes para un canal específico en función del ID del canal.
 *
 * @param {number} channelId - El ID del canal para el cual se recuperarán los mensajes.
 * @return {Array} Un arreglo de mensajes filtrados y mapeados según el ID del canal.
 */
export const getMessagesForChannel = (channelId) => {
  return messages.filter(message => message.channelId === channelId)
    .map(message => ({...message,timestamp: new Date(message.timestamp),
     
    }))
};
export const saveMessage = (newMessage) => {
  // Agregar el nuevo mensaje al array de mensajes
  messages.push(newMessage);
  
  // Guardar los mensajes en el local storage
  localStorage.setItem('messages', JSON.stringify(messages));
};

export const getNextMessageId = () => {
  const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  const lastMessageId = storedMessages.length > 0 ? storedMessages[storedMessages.length - 1].id : 0;
  return lastMessageId + 1;
};