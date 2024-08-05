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
      <h2>Messages to channel</h2>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="message-item">
              <img src={message.imageUrl} alt={`User ${message.senderId}`} className="message-avatar" />
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-info">
                  <span className="message-timestamp">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <span className="message-status">
                    {message.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No messages available for this channel</p>
      )}
    </div>
  );
};

export default SlackMessages;
