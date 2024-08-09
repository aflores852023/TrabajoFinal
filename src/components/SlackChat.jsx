import React, { useState } from 'react';
import '../Pages/style.css';
import { getNextMessageId } from '../helpers/messages';

const SlackChat = ({ onSendMessage, channelId, senderId }) => {
  const [text, setText] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '' && !attachment) {
      alert('Message cannot be empty');
      return;
    }

    // Obtener el próximo ID de mensaje
    const newMessageId = getNextMessageId();

    const newMessage = {
      id: newMessageId, // Usar el nuevo ID obtenido de helpers
      text: text,
      senderId: senderId,
      channelId: channelId,
      timestamp: new Date(),
      imageUrl: '/img/logo.png', // Imagen predeterminada
      status: 'sent',
      attachment: attachment ? URL.createObjectURL(attachment) : null, // Crear una URL temporal para la vista previa del archivo adjunto
    };

    onSendMessage(newMessage);

    // Resetear formulario
    setText('');
    setAttachment(null);
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        placeholder="Type your message"
        value={text}
        onChange={handleTextChange}
        className="message-input"
      />
      <input type="file" onChange={handleAttachmentChange} className="message-attachment" />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
};

export default SlackChat;
