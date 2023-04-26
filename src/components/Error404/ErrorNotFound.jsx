import React from 'react'
import { Link } from 'react-router-dom'

const ErrorNotFound = () => {
  return (
    <div className='h-screen flex flex-col gap-7 justify-center items-center pt-[80px]'>
      <h1 className='text-3xl text-center font-bold'> Error 404: articulo o elemento no encontrado </h1>
      <Link to={'/'}>
      <button className='w-[180px] self-center bg-gray-900 text-white hover:text-[#e427ab]'>Volver al inicio</button>
      </Link>
    </div>
  )
}

export default ErrorNotFound