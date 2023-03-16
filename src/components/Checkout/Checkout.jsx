import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Checkout.css'

const Checkout = ({ cart, limpiarCarrito, eliminarProductoId, precioFinal, setcompra }) => {
    
    return (
    <div className='bg'>
        <h1 className='tituloCarrito'>Carrito de compra</h1>
        {cart.map(item=>{
            return (
                <div key={item.id} className='carrito__tarjeta'>
                    <img src={item.imagen} alt={item.descripcion}/>
                    <div>
                        <h3>{item.nombre}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>${item.precio},00 <br/> <strong>Total: ${item.quantity*item.precio},00</strong></p>
                        <button onClick={()=>{eliminarProductoId(item.id)}}>Eliminar</button>
                    </div>`
                </div>
                )
        })}
        <div className='resumenContainer'>
            <div className='resumen'>
                <h2>Resumen de compra:</h2>
                <p><strong>Total: ${precioFinal()},00</strong></p>
                <button onClick={()=>{
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
            <Link to={'/'}>
                <button>Seguir Comprando</button>
            </Link>
            <button onClick={()=>{Swal.fire({
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