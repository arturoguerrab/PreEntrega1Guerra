import React from 'react'
import { Link } from 'react-router-dom'

const CarritoVacio = () => {
  return (
    <div className='flex flex-col h-3/5 items-center justify-center gap-4'>
        <h1 className='font-bold text-3xl'>CARRITO DE COMPRA</h1>
        <p>Agrega productos al carrito</p>
        <Link className='w-[180px]' to={'/'}>
            <button className='w-[180px] bg-gray-900 text-white hover:text-[#e427ab]'>Ver Productos</button>
        </Link>
    </div>
  )
}

export default CarritoVacio