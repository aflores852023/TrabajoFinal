import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const SlackWorkspaces = ({ workspace }) => {
 
  const { id, name } = workspace

 
  return (
    <div className='workspaces-list'>
      <span>{name}</span>
    {/*   <Link to={'/WorkspacesDetails/' + id}> */}
    <Link to={`/Workspaces/${id}/${id}`}>
        <button className='workspaces-list li'>Open</button>
      </Link>
    </div>
  );
};

export default SlackWorkspaces;
