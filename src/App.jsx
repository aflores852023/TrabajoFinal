import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Workspaces from './Pages/Workspaces' 
import Channels from './Pages/Channels'
import DirectMessages from './Pages/DirectMessages'
import Messages from './Pages/Messages'
import Home from './Pages/Home'
import WorkspacesDetails from './Pages/WorkspacesDetails'
import ChannelDetails from './Pages/ChannelDetails'
import { saveTestDataWorkspaces, saveTestDataMessages, saveTestDataChannels, saveTestDataUsers, saveTestDataDirectMessages } from './helpers/testdata'
import { users, workspaces, channels, messages, directMessages } from '../src/data/data.js'
import NewWorkspaces from './Pages/NewWorkspaces.jsx'
import NotFound from './Pages/404NotFound.jsx'
function App() {

  saveTestDataWorkspaces(workspaces) // inicializa los datos de los espacios de trabajo
  saveTestDataMessages(messages) // inicializa los datos de los mensajes
  saveTestDataChannels(channels) // inicializa los datos de los canales
  saveTestDataUsers(users) // inicializa los datos de los usuarios
  saveTestDataDirectMessages(directMessages) // inicializa los datos de los mensajes directos


  return (
    // <Route> siempre esta contenido dentro de Routes
    <Routes>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path ='/Channels:workspace_id' element={<Channels/>}/>
      <Route path ='/DirectMessages' element={<DirectMessages/>}/>
      <Route path ='/Messages' element={<Messages/>}/>
      <Route path='/Workspaces/:workspace_id' element={<Workspaces/>} />
      <Route path='/Workspaces/:workspace_id/WorkspacesDetails/:details_id' element={<WorkspacesDetails/>} />
      <Route path ='/Workspaces' element={<Workspaces />} />
      <Route path ='/Channels' element={<Channels />} />
      <Route path = '/ChannelDetails/:channel_id' element={<ChannelDetails/>} />      
      <Route path ='/Workspaces/New' element={<NewWorkspaces/>} />



    </Routes>
  )

}
export default App


