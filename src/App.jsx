import React from 'react'
import {nombre, persona} from './funciones' 
import {Button} from './components/Boton' 
import RowArticule from './components/RowArticule'
import sumar, { restar } from './Variables'


/* console.log(persona) */
let nombreUsuario = 'Julieta'

console.log(sumar(1,100))
console.log(restar(5,1))
function App() {

  return (
    
   <div>
    <div> 
      Comienzo Practica clase 21
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
