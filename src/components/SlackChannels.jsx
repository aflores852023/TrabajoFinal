import '../Pages/style.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SlackChannels = ({ channels, onChannelSelect }) => {
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);
  const [newChannelName, setNewChannelName] = useState('');
  const [localChannels, setLocalChannels] = useState(channels);

  const navigate = useNavigate();

  useEffect(() => {
    if (localChannels.length > 0) {
      // Verifica si ya se ha seleccionado un canal
      if (localChannels[0].id !== onChannelSelect.currentChannelId) {
        onChannelSelect(localChannels[0].id);
      }
    }
  }, []); // Nota: Dependencias vacías para que solo se ejecute una vez

  const handleCreateChannelClick = () => {
    setIsCreatingChannel(true);
  };

  const handleCancelClick = () => {
    setIsCreatingChannel(false);
    setNewChannelName('');
  };

  const handleCreateClick = () => {
    if (newChannelName.trim() === '') {
      alert('Channel name cannot be empty');
      return;
    }

    // Generar un nuevo ID único para el canal
    const newChannel = {
      id: localChannels.length > 0 ? Math.max(...localChannels.map(c => c.id)) + 1 : 1,
      name: newChannelName,
    };

    // Actualizar el estado local con el nuevo canal
    const updatedChannels = [...localChannels, newChannel];
    setLocalChannels(updatedChannels);

    // Guardar la nueva lista de canales en el local storage
    localStorage.setItem('channels', JSON.stringify(updatedChannels));

    // Seleccionar el nuevo canal creado
    onChannelSelect(newChannel.id);

    // Resetear el formulario
    setIsCreatingChannel(false);
    setNewChannelName('');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="channels-container">
      <div className="channels">
        <h2>Channels</h2>
        {localChannels.length > 0 ? (
          <ul>
            {localChannels.map(channel => (
              <li key={channel.id} onClick={() => onChannelSelect(channel.id)}>
                <div>{channel.name}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No channels available for this workspace</p>
        )}
        {!isCreatingChannel ? (
          <button className="create-channel-button" onClick={handleCreateChannelClick}>Create Channel</button>
        ) : (
          <div className="create-channel-form">
            <input
              type="text"
              placeholder="Name of channel"
              value={newChannelName}
              onChange={(e) => setNewChannelName(e.target.value)}
            />
            <button className="create-channel-button" onClick={handleCreateClick}>Create</button>
            <button className="cancel-channel-button" onClick={handleCancelClick}>Cancel</button>
          </div>
        )}
      </div>
      <button className="back-button" onClick={handleBackClick}>
        Back to Workspaces List
      </button>
    </div>
  );
};

export default SlackChannels;
