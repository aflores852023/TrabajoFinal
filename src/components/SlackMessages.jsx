import React, { useState, useEffect } from 'react';
import { getMessagesForChannel } from '../helpers/messages';
import '../Pages/style.css'; 

const SlackMessages = ({ channelId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      const channelMessages = getMessagesForChannel(channelId);
      setMessages(channelMessages);
    }
  }, [channelId]);

  return (
    <div className="messages">
      <h2>Messages Channels</h2>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.text}</li>
          ))}
        </ul>
      ) : (
        <p>No messages available for this channel</p>
      )}
    </div>
  );
};

export default SlackMessages;
