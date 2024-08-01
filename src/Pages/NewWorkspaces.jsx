import React from 'react'

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
            value={workspaceName}
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
            value={channel}
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
   


export default NewWorkspaces