import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getChannelsForWorkspace } from '../helpers/channels';
import SlackChannels from '../components/SlackChannels';
import SlackMessages from '../components/SlackMessages';
import './style.css';


/**
 * Renderiza los detalles de un espacio de trabajo.
 *
 * @return {JSX.Element} El componente renderizado.
 */
const WorkspacesDetails = () => {
  const { workspace_id } = useParams();
  const [channels, setChannels] = useState([]);
  const [selectedChannelId, setSelectedChannelId] = useState(null);

  useEffect(() => {
    const fetchedChannels = getChannelsForWorkspace(Number(workspace_id));
    setChannels(fetchedChannels);
    if (fetchedChannels.length > 0) {
      setSelectedChannelId(fetchedChannels[0].id);
    }
  }, [workspace_id]);

  const handleChannelSelect = (channelId) => {
    setSelectedChannelId(channelId);
  };

  return (
    <div className="container">
      <SlackChannels channels={channels} onChannelSelect={handleChannelSelect} />
      {selectedChannelId && <SlackMessages channelId={selectedChannelId} />}
    </div>
  );
};

export default WorkspacesDetails;
