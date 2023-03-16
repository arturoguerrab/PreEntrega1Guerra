import React from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'

const Checkout = ({ cart, limpiarCarrito, eliminarProductoId, precioFinal, setcompra }) => {
    
    return (
    <div>
        {cart.map(item=>{
            return <div key={item.id} className='carrito__tarjeta'>
                <img src={item.imagen} alt={item.descripcion}/>
                        <div>
                            <h3>{item.nombre}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p>${item.precio},00 <br/> <strong>Total: ${item.quantity*item.precio},00</strong></p>
                            <button onClick={()=>{eliminarProductoId(item.id)}}>Eliminar</button>
                        </div>`
            </div>
        })}
        <div className='resumenContainer'>
            <div className='resumen'>
                <h2>Resumen de compra:</h2>
                <p><strong>Total: ${precioFinal()},00</strong></p>
                <button onClick={()=>{setcompra(true)}}>Ir al Checkout</button>
            </div>
            <Link to={'/'}>
                <button>Seguir Comprando</button>
            </Link>
            <button onClick={limpiarCarrito}>limpiar carrito</button> 
        </div> 
    </div>
    )
}

export default Checkout