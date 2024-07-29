import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Workspaces from './Pages/Workspaces' 
import Channels from './Pages/Channels'
import DirectMessages from './Pages/DirectMessages'
import Messages from './Pages/Messages'
import Home from './Pages/Home'
import WorkspacesDetails from './Pages/WorkspacesDetails'
import ChannelDetails from './Pages/ChannelDetails'

function App() {


  return (
    // <Route> siempre esta contenido dentro de Routes
    <Routes>
      <Route path='/' element={
        <Home/>
      }/>
      
      <Route path ='/Channels:workspace_id' element={
          <Channels/>
      }/>
      
      <Route path ='/DirectMessages' element={
        <DirectMessages/>
      }/>

      <Route path ='/Messages' element={
        <Messages/>
      }/>
    <Route path='/Workspaces/:workspace_id' element={
      <Workspaces />
      } />
    <Route path='/Workspaces/:workspace_id/WorkspacesDetails/:details_id' element={
      <WorkspacesDetails />
      } />

      <Route path ='/Workspaces' element={
        <Workspaces />
      } />

      <Route path ='/Channels' element={
        <Channels />
      } />

      <Route path = '/ChannelDetails/:channel_id' element={
        <ChannelDetails/>  
      } />
      

    </Routes>
  )

}
export default App


