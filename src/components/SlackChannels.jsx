import '../Pages/style.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addChannel } from '../helpers/channels'; // Importa la función para agregar canales


const SlackChannels = ({ channels, onChannelSelect }) => {
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);
  const [newChannelName, setNewChannelName] = useState('');
  const [localChannels, setLocalChannels] = useState(channels); // Usa un estado local para los canales

  const handleCreateChannelClick = () => {
    setIsCreatingChannel(true);
  };

  const handleCancelClick = () => {
    setIsCreatingChannel(false);
    setNewChannelName('');
  };

  const handleCreateClick = () => {
    const newChannel = {
      id: localChannels.length + 1, // Generar un nuevo id de forma sencilla
      name: newChannelName,
      workspaceId: 1, // Asume que es el workspace con id 1 para este ejemplo
    };
    addChannel(newChannel); // Guarda el nuevo canal en el local storage
    setLocalChannels([...localChannels, newChannel]); // Actualiza el estado local
    setIsCreatingChannel(false);
    setNewChannelName('');
  };

  return (
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
  );
};

export default SlackChannels;
