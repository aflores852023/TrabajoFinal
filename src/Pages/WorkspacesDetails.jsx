import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWorkspacesChannelForId } from '../helpers/workspaces';
import SlackChannels from '../components/SlackChannels';
import SlackMessages from '../components/SlackMessages';
import '../Pages/style.css';

const WorkspacesDetails = () => {
  const { workspace_id } = useParams();
  const [channels, setChannels] = useState([]);
  const [firstChannelId, setFirstChannelId] = useState(null);

  useEffect(() => {
    const fetchedChannels = getWorkspacesChannelForId(workspace_id);
    setChannels(fetchedChannels);
    if (fetchedChannels.length > 0) {
      setFirstChannelId(fetchedChannels[0].id);
    }
  }, [workspace_id]);

  return (
    
      <div className="container">
        <SlackChannels channels={channels} />
        {firstChannelId && <SlackMessages channelId={firstChannelId} />}
      </div>
    
  );
};

export default WorkspacesDetails;
