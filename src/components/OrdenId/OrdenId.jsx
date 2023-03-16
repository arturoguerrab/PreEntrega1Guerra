import React from 'react'

import { Link } from 'react-router-dom'

import "./OrdenId.css"

const OrdenId = ({ ordenId }) => {


  return (
    <div className='loader '>
      <h1>Compra realizada</h1>
      <p>Tu numero de orden es: #{ordenId}</p>
      <Link to={"/"}><button>Volver al inicio</button></Link>
    </div>
  )
}

export default OrdenId