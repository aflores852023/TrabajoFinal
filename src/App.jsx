import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Workspaces from './Pages/Workspaces' 
import Channels from './Pages/Channels'
import DirectMessages from './Pages/DirectMessages'
import Messages from './Pages/Messages'
import Home from './Pages/Home'

function App() {


  return (
    // <Route> siempre esta contenido dentro de Routes
    <Routes>
      <Route path='/' element={
        <Home/>
      }/>
      <Route path='/Workspaces' element={
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


