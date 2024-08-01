import React, { useState } from 'react';
import { getWorkspaces } from '../helpers/workspaces'; // src\helpers\workspaces.js
import SlackWorkspacesList from '../components/SlackWorkspacesList'; // src\components\SlackWorkspacesList.jsx
import { useGlobalContextWorkspaces } from '../Context/GlobalContext';
import { Link } from 'react-router-dom';
 

const Home = () => {
  const workspaces = getWorkspaces();
  const { workspaces: contextWorkspaces } = useGlobalContextWorkspaces(); // Extrae workspaces del contexto


  // Usa los workspaces del contexto si están disponibles, de lo contrario usa los locales
  const [workspace, setWorkspace] = useState(contextWorkspaces ? contextWorkspaces[0] : workspaces[0]);

  return (
    <>
      <div>Welcome Clone Slack application</div>
      <div>Selected Workspace: {workspace ? workspace.name : 'No workspace selected'}</div>
      <SlackWorkspacesList workspaces={workspaces} /> 
      <Link to={`/Workspaces/New}`}>
        <button>Create Workspace</button>
      </Link>
    </>
      
    
  );
};

export default Home;