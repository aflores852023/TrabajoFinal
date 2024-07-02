import React from 'react'
import {nombre, persona} from './funciones' 
import {Button} from './components/Boton' 
import RowArticule from './components/RowArticule'
import sumar from './Variables'

console.log(persona)
let nombreUsuario = 'Julieta'
sumar

function App() {
  return (
   <div>
    <div> 
      <h1>Hola usuario/a : {nombreUsuario}</h1>
      <Button texto={'bonton 1 crear cuenta'}/>
      <Carta/>  
    </div>
    
    <div> 
      <Button texto={'bonton 2 agregar a favoritos'}/>
      <Carta/>  
    </div>

    <div> 
      Comienzo Practica clase 22
      <RowArticule 
      titulo={'Liff-off:The MDN Curriculum Launch'} 
      fecha={'4 months ago'} 
      direccion_author={'developer.mozilla.org'} 
      />
      <RowArticule 
      titulo= {"Baseline's evolucion on MDN"}
      fecha={'7 months ago'}
      direccion_author={'developer.mozilla.org'}
      />
      <RowArticule 
      titulo= {'Introducing the MDN playground: Bring your code to life'}
      fecha={'a year ago'}
      direccion_author={'developer.mozilla.org'}
      />
      
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
