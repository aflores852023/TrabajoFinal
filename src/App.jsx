import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Workspaces from './Pages/Workspaces' 
import Channels from './Pages/Channels'
import DirectMessages from './Pages/DirectMessages'
import Messages from './Pages/Messages'

function App() {

  return (

    // <Route> siempre esta contenido dentro de Routes
    <Routes>
      <Route path='/' element={
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



    </Routes>
  )
}
export default App


