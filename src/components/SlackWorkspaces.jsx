import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const SlackWorkspaces = ({ workspace }) => {
 
  const { id, name } = workspace

 
  return (
    <div className='workspaces-list'>
      
      <div className='workspace-item'>  
      <div className='workspace-icon'> <img src='/img/logo_workspaces.jpeg' width={40} height={40} /> </div>
      <div className= 'workspace-info'>
      
      <div className = 'workspace-name'>{name}</div>
      
    {/*   <Link to={'/WorkspacesDetails/' + id}> */}
    
    <Link to={`/Workspaces/${id}/${id}`}>
        <button className='workspace-button'>Open</button>
        
      </Link>
      </div>
    </div>
    </div>
  );
};

export default SlackWorkspaces;
