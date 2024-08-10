import React, { useState, useEffect } from 'react';
import { useGlobalContextWorkspaces } from '../Context/GlobalContext';

const NewWorkspaces = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [icon, setIcon] = useState(null);
  const [users, setUsers] = useState([]);

  const { handleCreateWorkspaces } = useGlobalContextWorkspaces();

  // Cargar usuarios del localStorage al montar el componente
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkspace = {
      id: Date.now(),  // Generar un ID único para el workspace
      name: workspaceName,
      members: selectedMembers,
      icon: icon ? URL.createObjectURL(icon) : null, // Crear una URL temporal para el icono
    };

    handleCreateWorkspaces(newWorkspace);

    // Limpiar el formulario después de la creación
    setWorkspaceName('');
    setSelectedMembers([]);
    setIcon(null);
  };

  const handleIconChange = (e) => {
    setIcon(e.target.files[0]);
  };

  const handleMemberChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedMembers(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Workspace</h2>
      <div>
        <label>
          Workspace Name:
          <input
            type="text"
            value={workspaceName}
            onChange={e => setWorkspaceName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Members:
          <select
            multiple
            value={selectedMembers}
            onChange={handleMemberChange}
            required
          >
            {users.map(user => (
              <option key={user.id} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Workspace Icon:
          <input
            type="file"
            accept="image/*"
            onChange={handleIconChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Create Workspace</button>
      </div>
    </form>
  );
};

export default NewWorkspaces;

/* import React from 'react'

import { useGlobalContextWorkspaces } from '../Context/GlobalContext';

const NewWorkspaces = () => {
    const {handleCreateWorkspaces} = useGlobalContextWorkspaces();
      
  return (
      <form onSubmit={handleCreateWorkspaces}>
        <h2>Create Workspace</h2>
        <div>
        <label>
          Workspace Name:
          <input
            type="text"
            value='name'
            onChange={e => setWorkspaceName(e.target.value)}
            required
          />
        </label>
        </div>
        <div> 
        <label>
          Channel name:
          <input
            type="text"
            value='channel'
            onChange={e => setChannel(e.target.value)}
            required
          />
        </label>
        </div>
        <div>
          <button type="submit">Create Workspace</button>
        </div>

      </form>
    );
  }
    */


/* export default NewWorkspaces */