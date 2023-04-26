import React from 'react'


const ItemDetail = ({ producto, contador, sumar, restar, onAdd }) => {

    return (

        <div className='grid place-items-center py-4  lg:grid-cols-3 2xl:grid-cols-2 lg:justify-around'>
            <img 
                className='lg:col-span-2 2xl:col-span-1 
                            w-[350px] h-[350px] 
                            sm:w-[420px] sm:h-[420px] 
                            lg:w-[480px] lg:h-[480px] 
                            2xl:w-[560px] 2xl:h-[560px]' 

                src={producto.imagenDos} 
                alt={producto.descripcion} 
            />
            
            <div className='flex flex-col justify-center gap-5 pb-4 w-[350px] sm:w-[420px] lg:w-5/6 lg:col-span-1'>
                <span className='italic text-center md:text-left'>{producto.descripcion}</span>
                <h1 className='font-bold text-3xl md:text-4xl'>{producto.nombre}</h1>
                <div className='flex gap-4 align-baseline'>
                    <p className='text-[#e427ab] text-xl'> ${producto.precio},00</p>
                    <div className='bg-white flex justify-evenly items-center w-[80px] border-solid border border-black'>
                        <button className='w-1/4 h-full' onClick={restar}>-</button>
                        <span className='w-2/4 h-full text-center pt-0.5 border-solid border border-y-0 border-black'>{contador}</span>
                        <button className='w-1/4 h-full' onClick={sumar}>+</button>
                    </div>
                </div>
                <p>{producto.about}</p>
                <button className='w-[180px] self-center bg-gray-900 text-white hover:text-[#e427ab]' onClick={onAdd}>AÑADIR AL CARRITO</button>
            </div>
        </div>
        
    )
}

export default ItemDetail