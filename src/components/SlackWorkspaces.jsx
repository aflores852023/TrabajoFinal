/* Workspaces (Espacios de Trabajo)
Un workspace en Slack es un entorno colaborativo que contiene todos los canales, mensajes y archivos de un equipo o empresa.
Funcionalidades:
Creación de Workspaces: Los usuarios pueden crear nuevos espacios de trabajo para diferentes equipos o proyectos.
 */
import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const SlackWorkspaces = ({ workspace }) => {
  const { name, members, id } = workspace;

  return (
    <div>
      <span> {name} </span>
      <Link to={`/workspaces/${id}`}>
        <button> Entrar </button>
      </Link>
    </div>
  );
};

export default SlackWorkspaces;
