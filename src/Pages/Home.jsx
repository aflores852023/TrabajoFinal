import React, { useState } from 'react';
import { getWorkspaces } from '../helpers/workspaces'; // src\helpers\workspaces.js
import SlackWorkspacesList from '../components/SlackWorkspacesList'; // src\components\SlackWorkspacesList.jsx
import { useGlobalContextWorkspaces } from '../Context/GlobalContext';
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
  const workspaces = getWorkspaces();
  const { workspaces: contextWorkspaces } = useGlobalContextWorkspaces(); // Extrae workspaces del contexto

  // Usa los workspaces del contexto si están disponibles, de lo contrario usa los locales
  const [workspace, setWorkspace] = useState(contextWorkspaces ? contextWorkspaces[0] : workspaces[0]);

  return (
    <>
      <div className='home'>
        <div className='home-Logo'>
          <img src='img/logo.png' alt='logo' />
        </div>
        <div className='home-Title'>Welcome to Clone Slack Application</div>
        <div className='home-Title-Down'>Choose a workspace below to get back to work with your team. {workspace ? workspace.name : 'No workspace selected'}</div>
        <SlackWorkspacesList workspaces={workspaces} />
        <Link to={'/Workspaces/New'}>
          <button className='home-Create-Workspace button'>Create Workspace</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
