import React from 'react'
/* recibe titulo, fecha direccion del autor */
const RowArticule = (props) => {
  return (
    <div>
    <div>
        <h2>{props.titulo}</h2>
        <span>{props.fecha}</span>
        <h2 />
        <a href="http//developer.mozila.org">{props.direccion_author} </a>
    </div>
</div>
  )
}

export default RowArticule