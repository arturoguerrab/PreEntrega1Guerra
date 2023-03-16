import React from 'react'
import "./OrdenId.css"

const OrdenId = ({ ordenId }) => {

  return (
    <div className='ordenInfo'>
      <div>Su Compra se ha realizado con exito!</div>
      <div>el Codigo de su compra es: {ordenId}</div>
    </div>
  )
}

export default OrdenId