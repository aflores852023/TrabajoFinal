export const getMessagesForChannel = (channelId) => {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  return messages.filter(message => message.channelId === channelId);
};