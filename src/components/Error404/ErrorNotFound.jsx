import React from 'react'
import { Link } from 'react-router-dom'

const ErrorNotFound = () => {
  return (
    <div className='bg loader'>
      <h1> Error 404: articulo o elemento no encontrado </h1>
      <Link to={'/'}>
      <button>Volver al inicio</button>
      </Link>
    </div>
  )
}

export default ErrorNotFound