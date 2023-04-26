import React from 'react'

import { Link } from 'react-router-dom'

const OrdenId = ({ ordenId }) => {


  return (
    <div className='h-screen flex flex-col gap-7 justify-center items-center pt-[80px]'>
      <h1 className='font-bold text-4xl text-[#e427ab]'>¡Compra realizada!</h1>
      <p className='text-2xl text-center flex flex-col gap-2 bg-gray-300 p-7'>Tu numero de orden es: <strong>#{ordenId}</strong></p>
      <Link to={"/"}><button className='w-[180px] self-center bg-gray-900 text-white hover:text-[#e427ab]'>Volver al inicio</button></Link>
    </div>
  )
}

export default OrdenId