import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChannelsForWorkspace } from '../helpers/channels';
import { getMessagesForChannel } from '../helpers/messages';
import SlackChannels from '../components/SlackChannels';
import SlackMessages from '../components/SlackMessages';
import './style.css';

const WorkspacesDetails = () => {
  const { workspace_id } = useParams();
  const [channels, setChannels] = useState(() => getChannelsForWorkspace(Number(workspace_id)));

  const [selectedChannelId, setSelectedChannelId] = useState(channels.length > 0 ? channels[0].id : null);
  const [messages, setMessages] = useState(selectedChannelId ? getMessagesForChannel(selectedChannelId) : []);

  const handleChannelSelect = (channelId) => {
    setSelectedChannelId(channelId);
    setMessages(getMessagesForChannel(channelId));
  };

  const handleAddChannel = (newChannel) => {
    const updatedChannels = [...channels, newChannel];
    setChannels(updatedChannels);
    setSelectedChannelId(newChannel.id);
  };

  return (
    <div className="container">
      <SlackChannels 
        channels={channels} 
        workspaceId={Number(workspace_id)} // Pasa workspaceId como prop
        onChannelSelect={handleChannelSelect} 
        onAddChannel={handleAddChannel} 
      />
      {selectedChannelId && <SlackMessages messages={messages} />}
    </div>
  );
};

export default WorkspacesDetails;
