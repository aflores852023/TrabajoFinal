const messages = JSON.parse(localStorage.getItem('messages')) || [];

export const getMessagesForChannel = (channelId) => {
  return messages
    .filter(message => message.channelId === channelId)
    .map(message => ({
      ...message,
      timestamp: new Date(message.timestamp),
    }));
};
