import '../Pages/style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addChannel, getNextChannelId } from '../helpers/channels';

const SlackChannels = ({ channels, workspaceId, onChannelSelect, onAddChannel }) => {
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);
  const [newChannelName, setNewChannelName] = useState('');

  const navigate = useNavigate();

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

    // Obtener el siguiente ID de canal
    const newChannelId = getNextChannelId();

    const newChannel = {
      id: newChannelId,
      name: newChannelName,
      workspaceId: workspaceId, // Agregar workspaceId al canal
    };

    // Llamar a la función addChannel para agregar el canal al almacenamiento local
    const updatedChannels = addChannel(newChannel);

    // Actualizar la lista de canales en el componente padre
    onAddChannel(newChannel);

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
        {channels.length > 0 ? (
          <ul>
            {channels.map(channel => (
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
