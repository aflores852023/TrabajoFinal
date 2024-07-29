import React from 'react'
import SlackWorkspaces from '../components/SlackWorkspaces.jsx'
import { useParams } from 'react-router-dom'


const Workspaces = () => {
  const parametros = useParams()

  
  return (
    <SlackWorkspaces workspace={workspace}/>
  )
}

export default Workspaces