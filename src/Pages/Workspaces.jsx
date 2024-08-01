import React from 'react'
import SlackWorkspaces from '../components/SlackWorkspaces.jsx'
import { useParams } from 'react-router-dom'
import { workspaces } from '../data/data.js'

const Workspaces = () => {
  const parametros = useParams()

  
  return (
    <SlackWorkspaces workspace={workspaces}/>
  )
}

export default Workspaces