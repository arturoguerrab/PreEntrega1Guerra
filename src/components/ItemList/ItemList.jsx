import React from 'react'

import { Link } from "react-router-dom"

const ItemList = ({ productos }) => {

    return (
        <>
            <h1 className='font-bold text-3xl text-center pt-4 pb-6'>Productos</h1>
            <div className='sm:w-10/12 mx-auto grid place-items-center gap-y-7 sm:gap-x-10 lg:gap-x-32 xl:gap-x-20 xl:w-3/4 md:grid-cols-2 lg:grid-cols-3'>
            {
                productos.map((element)=>{
                    return(
                            <div className="w-[300px] h-[480px] md:col-span-1" key={element.id}>
                                <img className="w-full h-[300px]" src={element.imagenDos} loading="lazy" alt={element.descripcion}/>
                                <div className="h-[160px] pt-1 pb-3 flex flex-col justify-around items-center bg-white">
                                    <h3 className="text-center text-2xl">{element.nombre}</h3>
                                    <p className="italic text-gray-600 text-center w-4/5 ">{element.descripcion}</p>
                                    <p className="text-[#e427ab]">${element.precio},00</p>
                                    <Link to={`/item/${element.id}`}>
                                        <button className='w-[180px] bg-gray-900 text-white hover:text-[#e427ab]'>Ver Mas</button>
                                    </Link>
                                </div>
                            </div>
                    )
                })
                
            }
            </div>
        </>
    )
}

export default ItemList