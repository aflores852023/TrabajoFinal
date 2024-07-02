import React from 'react'
import {nombre, persona} from './funciones' 
import {Button} from './components/Boton' 

console.log(persona)
function App() {
  return (
   <div>
    <div> 
      <Button/>
      <Carta/>  
    </div>
    
    <div> 
      <Button/>
      <Carta/>  
    </div>
  </div>
  )
}


const Carta = () => {  
  return (
    <div>Carta</div>
  )
}

export default App
