import React, { useState } from 'react';
import '../Pages/style.css';

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

    // Obtener el último mensaje desde el localStorage para determinar el próximo ID
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const lastMessageId = storedMessages.length > 0 ? storedMessages[storedMessages.length - 1].id : 0;

    const newMessage = {
      id: lastMessageId + 1, // Nuevo ID basado en el último ID
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
