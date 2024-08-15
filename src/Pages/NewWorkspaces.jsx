import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContextWorkspaces } from '../Context/GlobalContext';
import { addChannel, getNextChannelId } from '../helpers/channels';
import { getLastWorkspaceId } from '../helpers/workspaces';

const NewWorkspaces = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const navigate = useNavigate();
  const { handleCreateWorkspaces, workspaces } = useGlobalContextWorkspaces();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkspaceId = getLastWorkspaceId(workspaces) + 1;

    const newWorkspace = {
      id: newWorkspaceId,
      name: workspaceName,
      icon: '/img/logoworkspace.jpg',
      members: [1, 2, 3],
    };

    const generalChannel = {
      id: getNextChannelId(),
      name: 'General',
      workspaceId: newWorkspaceId,
    };
    addChannel(generalChannel);

    handleCreateWorkspaces(newWorkspace);

    setWorkspaceName('');

    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="home"> {/* Usar la clase home para mantener el diseño centrado */}
      <div className="home-logo">
        <img src="/img/logo_workspaces.jpeg" alt="Workspace Icon" className="slack-logo" />
      </div>
      <h2 className="home-welcome">Create New Workspace</h2>
      <form onSubmit={handleSubmit} className="create-workspace-form">
        <div className="form-group">
          <label htmlFor="workspaceName" className="form-label">Workspace Name:</label>
          <input
            type="text"
            id="workspaceName"
            className="form-input"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="create-workspace-button_in_worskpace">Create Workspace</button>
        </div>
      </form>
      <button className="create-workspace-button_back_button " onClick={handleBackClick}>
        Back to Workspaces List
      </button>
    </div>
  );
};

export default NewWorkspaces;
