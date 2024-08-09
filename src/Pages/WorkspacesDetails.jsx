import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChannelsForWorkspace } from '../helpers/channels';
import { getMessagesForChannel } from '../helpers/messages';
import SlackChannels from '../components/SlackChannels';
import SlackMessages from '../components/SlackMessages';
import './style.css';

const WorkspacesDetails = () => {
  const { workspace_id } = useParams();

  // Obtener los canales directamente
  const channels = getChannelsForWorkspace(Number(workspace_id));

  // Seleccionar el primer canal de la lista y obtener los mensajes
  const [selectedChannelId, setSelectedChannelId] = useState(channels.length > 0 ? channels[0].id : null);
  const [messages, setMessages] = useState(selectedChannelId ? getMessagesForChannel(selectedChannelId) : []);

  const handleChannelSelect = (channelId) => {
    setSelectedChannelId(channelId);
    setMessages(getMessagesForChannel(channelId)); // Actualizar mensajes cuando se selecciona un canal
  };

  return (
    <div className="container">
      <SlackChannels channels={channels} onChannelSelect={handleChannelSelect} />
      {selectedChannelId && <SlackMessages messages={messages} />}
    </div>
  );
};

export default WorkspacesDetails;
