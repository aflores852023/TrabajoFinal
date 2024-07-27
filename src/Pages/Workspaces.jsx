import React from 'react'
import SlackWorkspaces from '../components/SlackWorkspaces.jsx'
import { useParams } from 'react-router-dom'
import {getWorkspacesForId } from '../helpers/workspaces.js';

const Workspaces = () => {

  const parametros = useParams()

const workspace = getWorkspacesForId(parametros.workspace_id)
    console.log(workspace)
  return (
    <SlackWorkspaces/>
  )
}

export default Workspaces