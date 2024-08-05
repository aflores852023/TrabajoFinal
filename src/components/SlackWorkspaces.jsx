import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const SlackWorkspaces = ({ workspace }) => {
 
  const { id, name } = workspace

 
  return (
    <div className='home-List-Workspaces'>
      <span>{name}</span>
    {/*   <Link to={'/WorkspacesDetails/' + id}> */}
    <Link to={`/Workspaces/${id}/${id}`}>
        <button className='home-List-Workspaces button'>Open</button>
      </Link>
    </div>
  );
};

export default SlackWorkspaces;
