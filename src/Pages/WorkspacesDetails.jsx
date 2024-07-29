import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWorkspacesChannelForId } from '../helpers/workspaces';

const WorkspacesDetails = () => {
  const { workspace_id } = useParams();
  const channels = getWorkspacesChannelForId(workspace_id);

  return (
    <div>
      <h1>Detalles del Workspace {workspace_id}</h1>
      <h2>Channels:</h2>
      {channels && channels.length > 0 ? (
        <ul>
          {channels.map(channel => (
            <li key={channel.id}>
              <div>{channel.name}</div>
              <Link to={`/ChannelDetails/${channel.id}`}>
                <button>Entrar</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No channels available for this workspace</p>
      )}
    </div>
  );
};

export default WorkspacesDetails;
