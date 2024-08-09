import React, { useState } from 'react';
import { getWorkspaces } from '../helpers/workspaces';
import SlackWorkspacesList from '../components/SlackWorkspacesList';
import { useGlobalContextWorkspaces } from '../Context/GlobalContext';
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
  const workspaces = getWorkspaces();
  const { workspaces: contextWorkspaces } = useGlobalContextWorkspaces();

  const [workspace, setWorkspace] = useState(contextWorkspaces ? contextWorkspaces[0] : workspaces[0]);

  return (
    <div className='home'>
      <div className='home-logo'>
        <img src='/img/logo.png' className='slack-logo' />
      </div>
      <h1 className='home-welcome'>Welcome to Clone_Slack</h1>
      <h2 className='home-subtitle'>Workspaces List</h2>

      <SlackWorkspacesList workspaces={workspaces} />

      <Link to={'/Workspaces/New'}>
        <div className='create-workspace-container'>
          <button className='create-workspace-button'>Create Workspace</button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
