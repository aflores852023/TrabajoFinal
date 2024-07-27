/* Workspaces (Espacios de Trabajo)
Un workspace en Slack es un entorno colaborativo que contiene todos los canales, mensajes y archivos de un equipo o empresa.
Funcionalidades:
Creación de Workspaces: Los usuarios pueden crear nuevos espacios de trabajo para diferentes equipos o proyectos.
 */
import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import { workspaces } from '../data/data';

const SlackWorkspaces = ({ workspace }) => {
  const { id, name, members } = workspace
  const getWorkspacesForId = (id) => {
  workspaces
  }

  return (
    <div>
      <span> {name} </span>
      <Link to={'/WorkspacesDetails/'+id}>
        <button> Entrar </button>
      </Link>
     
     </div>
  );
};

export default SlackWorkspaces;
