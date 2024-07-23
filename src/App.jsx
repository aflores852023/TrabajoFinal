import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
export default App
