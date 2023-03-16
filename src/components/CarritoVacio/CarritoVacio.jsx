import React from 'react'
import { Link } from 'react-router-dom'

const CarritoVacio = () => {
  return (
    <div className='loader'>
        <div>El Carrito se encuentra vacio</div>
        <p>Inicia agregando un producto!</p>
        <Link to={'/'}>
            <button>Ver Productos</button>
        </Link>
    </div>
  )
}

export default CarritoVacio