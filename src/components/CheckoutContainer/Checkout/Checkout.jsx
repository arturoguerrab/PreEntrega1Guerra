import React from 'react'

import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'

const Checkout = ({ cart, limpiarCarrito, eliminarProductoId, precioFinal, setcompra }) => {
    
    return (
        <div className='h-full sm:w-10/12 mx-auto flex flex-col justify-center items-center pt-[80px] pb-[80px] gap-4'>
            <h1 className='text-center p-4 font-bold text-3xl'>CARRITO DE COMPRA</h1>
            {cart.map(item=>{
                return (
                    <div key={item.id} 
                        className=' flex justify-center items-center  bg-gray-300 
                                w-[360px] h-[200px] 
                                lg:w-[600px] lg:h-[250px]'
                    >

                        <img src={item.imagen}
                            alt={item.descripcion}
                            className='w-[150px] h-[150px] 
                                    lg:w-[230px] lg:h-[230px]'
                        />

                        <div className='flex flex-col items-center gap-3 w-2/4'>
                            <h3 className='font-bold text-2xl'>{item.nombre}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p className='text-center'>${item.precio},00 <br/> <strong className='text-[#e427ab]'>Total: ${item.quantity*item.precio},00</strong></p>
                            <button onClick={()=>{eliminarProductoId(item.id)}}
                                    className='w-[150px] self-center bg-gray-900 text-white hover:bg-red-700'
                                >Eliminar
                            </button>
                            
                        </div>`
                    </div>
                    )
            })}
            <div className=' flex flex-col justify-center items-center  bg-gray-300 
                            w-[360px] h-[200px] 
                            lg:w-[600px] lg:h-[250px]'
            >
                <div className='flex flex-col justify-center items-center gap-3 pb-3'>
                    <h2 className='font-bold text-2xl'>Resumen de compra:</h2>
                    <p><strong className='text-[#e427ab]'>Total: ${precioFinal()},00</strong></p>
                    <button className='w-[150px] self-center bg-gray-900 text-white hover:bg-green-700' 
                        onClick={()=>{
                            Swal.fire({
                                title: 'Desea finalizar la compra?',
                                text: "",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Si, ir al Checkout'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    setcompra(true)
                                }
                                })
                        }}>Ir al Checkout
                        </button>
                </div>
                <Link className='pb-3' to={'/'}>
                    <button className='w-[150px] self-center bg-gray-900 text-white hover:text-[#e427ab]'>Seguir Comprando</button>
                </Link>
                <button className='w-[150px] self-center bg-gray-900 text-white hover:text-[#e427ab]'
                    onClick={()=>{Swal.fire({
                        title: 'Deseas vaciar el carrito?',
                        text: "La accion no se podra deshacer ",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, quiero vaciarlo'
                        }).then((result) => {
                        if (result.isConfirmed) {
                            limpiarCarrito()
                            Swal.fire(
                                'Eliminado',
                                'El carrito esta vacio',
                                'success'
                            )
                        }
                    })}}>Vaciar carrito
                </button> 
            </div> 
        </div>
    )
}

export default Checkout