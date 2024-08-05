import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/style.css';

const SlackChannels = ({ channels }) => {
  return (
    <div className="channels">
      <h2>Channels</h2>
      {channels.length > 0 ? (
        <ul>
          {channels.map(channel => (
            <li key={channel.id}>
              <Link to={`${channel.id}`}>
                <div>{channel.name}</div>
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

export default SlackChannels;
