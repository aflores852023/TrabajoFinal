import React, { useState } from 'react';
import { workspaces } from '../data/data'; // src\data\data.js
import SlackWorkspacesList from '../components/SlackWorkspacesList'; // src\components\SlackWorkspacesList.jsx
import { useGlobalContextWorkspaces } from '../Context/GlobalContext';

const Home = () => {
  const { workspaces: contextWorkspaces } = useGlobalContextWorkspaces(); // Extrae workspaces del contexto


  // Usa los workspaces del contexto si están disponibles, de lo contrario usa los locales
  const [workspace, setWorkspace] = useState(contextWorkspaces ? contextWorkspaces[0] : workspaces[0]);

  return (
    <>
      <div>Welcome Clone Slack application</div>
      <div>Selected Workspace: {workspace ? workspace.name : 'No workspace selected'}</div>
      <SlackWorkspacesList workspaces={workspaces} /> 
    </>
  );
};

export default Home;