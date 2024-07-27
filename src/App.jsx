import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Workspaces from './Pages/Workspaces' 
import Channels from './Pages/Channels'
import DirectMessages from './Pages/DirectMessages'
import Messages from './Pages/Messages'
import Home from './Pages/Home'
import WorkspacesDetails from './Pages/WorkspacesDetails'

function App() {


  return (
    // <Route> siempre esta contenido dentro de Routes
    <Routes>
      <Route path='/' element={
        <Home/>
      }/>
      <Route path='/Workspaces/:workspace_id' element={
        <Workspaces/>
      }/>

        <Route path ='/Channels' element={
          <Channels/>
      }/>
      
      <Route path ='/DirectMessages' element={
        <DirectMessages/>
      }/>

      <Route path ='/Messages' element={
        <Messages/>
      }/>

      <Route path = '/WorkspacesDetails/:workspace_id' element={
        <WorkspacesDetails/>
      }/>

    </Routes>
  )
 
}
export default App


