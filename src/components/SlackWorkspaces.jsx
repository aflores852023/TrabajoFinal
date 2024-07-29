import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const SlackWorkspaces = ({ workspace }) => {
 
  const { id, name } = workspace

 
  return (
    <div>
      <span>{name}</span>
    {/*   <Link to={'/WorkspacesDetails/' + id}> */}
    <Link to={`/Workspaces/${id}/WorkspacesDetails/${id}`}>
        <button>Entrar</button>
      </Link>
    </div>
  );
};

export default SlackWorkspaces;
